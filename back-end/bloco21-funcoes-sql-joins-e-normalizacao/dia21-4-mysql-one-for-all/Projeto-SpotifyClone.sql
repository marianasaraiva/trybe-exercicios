-- REQUISITO 02
-- Crie uma QUERY que exiba três colunas:
-- A primeira coluna deve exibir a quantidade total de canções. Dê a essa coluna o alias "cancoes".
-- A segunda coluna deve exibir a quantidade total de artistas e deverá ter o alias "artistas".
-- A terceira coluna deve exibir a quantidade de álbuns e deverá ter o alias "albuns".

-- cancoes_id, cancoes, duracao_segundo, artista_id, album_id
SELECT COUNT(cancoes_id) AS cancoes, COUNT(DISTINCT artista_id) AS artistas, COUNT(DISTINCT album_id) AS albuns
FROM SpotifyClone.Cancoes;

-- REQUISITO 03
-- Crie uma QUERY que deverá ter apenas três colunas:
-- A primeira coluna deve possuir o alias "usuario" e exibir o nome da pessoa usuária.
-- A segunda coluna deve possuir o alias "qtde_musicas_ouvidas" e exibir a quantidade de 
-- músicas ouvida pela pessoa com base no seu histórico de reprodução.
-- A terceira coluna deve possuir o alias "total_minutos" e exibir a soma dos minutos ouvidos 
-- pela pessoa usuária com base no seu histórico de reprodução.
-- Os resultados devem estar agrupados pelo nome da pessoa usuária e ordenados em ordem alfabética.
SELECT
	usuario AS usuario,
    COUNT(HR.cancoes_id) AS `qtde_musicas_ouvidas`,
    ROUND(SUM(C.duracao_segundos)/60, 2) AS `total_minutos`
FROM SpotifyClone.Usuario AS U
JOIN SpotifyClone.HistoricoReproducao AS HR
ON U.usuario_id = HR.usuario_id
JOIN SpotifyClone.Cancoes AS C
ON HR.cancoes_id = C.cancoes_id
GROUP BY U.usuario
ORDER BY U.usuario;


-- REQUISITO 04:
-- Crie uma QUERY que deve mostrar as pessoas usuárias que estavam ativas no ano de 2021 se baseando na data mais recente no histórico de reprodução.
-- A primeira coluna deve possuir o alias "usuario" e exibir o nome da pessoa usuária.
-- A segunda coluna deve ter o alias "condicao_usuario" e exibir se a pessoa usuária está ativa ou inativa.
-- O resultado deve estar ordenado em ordem alfabética.
SELECT
	usuario AS usuario,
	IF(YEAR(MAX(HR.data_reproducao)) LIKE '2021%', 'Usuário ativo', 'Usuário inativo') AS `condicao_usuario`
FROM SpotifyClone.Usuario AS U
JOIN SpotifyClone.HistoricoReproducao AS HR
ON U.usuario_id = HR.usuario_id
GROUP BY U.usuario 
ORDER BY U.usuario ASC;

-- REQUISITO 05
-- Estamos fazendo um estudo das músicas mais tocadas e precisamos saber quais são as duas músicas mais tocadas no momento. Crie uma QUERY que possua duas colunas:
-- A primeira coluna deve possuir o alias "cancao" e exibir o nome da canção.
-- A segunda coluna deve possuir o alias "reproducoes" e exibir a quantidade de pessoas que já escutaram a canção em questão.
-- Seu resultado deve estar ordenado em ordem decrescente, baseando-se no número de reproduções. Em caso de empate, ordene os resultados pelo nome da canção em ordem alfabética. Queremos apenas o top 2 de músicas mais tocadas.

SELECT C.cancoes AS `cancao`, COUNT(HR.usuario_id) AS `reproducoes`
FROM SpotifyClone.HistoricoReproducao AS HR
JOIN SpotifyClone.Cancoes AS C
ON HR.cancoes_id = C.cancoes_id
GROUP BY C.cancoes_id
ORDER BY reproducoes DESC, cancao ASC LIMIT 2;

-- REQUISITO 06
-- Tendo como base o valor dos planos e o plano que cada pessoa usuária cadastrada possui no banco, queremos algumas informações sobre o faturamento da empresa. Crie uma QUERY que deve exibir quatro dados:
-- A primeira coluna deve ter o alias "faturamento_minimo" e exibir o menor valor de plano existente para uma pessoa usuária.
-- A segunda coluna deve ter o alias "faturamento_maximo" e exibir o maior valor de plano existente para uma pessoa usuária.
-- A terceira coluna deve ter o alias "faturamento_medio" e exibir o valor médio dos planos possuídos por pessoas usuárias até o momento.
-- Por fim, a quarta coluna deve ter o alias "faturamento_total" e exibir o valor total obtido com os planos possuídos por pessuas usuárias.
-- Para cada um desses dados, por se tratarem de valores monetários, deve-se arredondar o faturamento usando apenas duas casas decimais.
SELECT 
	MIN(valor_plano) AS `faturamento_minimo`,
    MAX(valor_plano) AS `faturamento_maximo`,
    ROUND(SUM(valor_plano)/COUNT(usuario_id), 2) AS `faturamento_medio`,
    ROUND(SUM(valor_plano), 2) AS `faturamento_total`
FROM SpotifyClone.Usuario AS U
JOIN SpotifyClone.Plano AS P
ON U.plano_id = P.plano_id;

-- REQUISITO 07:
-- Mostre uma relação de todos os álbuns produzidos por cada pessoa artista, com a quantidade de seguidores que ela possui, de acordo com os detalhes a seguir. Para tal, crie uma QUERY com as seguintes colunas:
-- A primeira coluna deve exibir o nome da pessoa artista, com o alias "artista".
-- A segunda coluna deve exibir o nome do álbum, com o alias "album".
-- A terceira coluna deve exibir a quantidade de pessoas seguidoras que aquela pessoa artista possui e deve possuir o alias "seguidores".

SELECT 
	Art.artista AS `artista`,
    Alb.album AS `album`,
    COUNT(Seg.usuario_id) AS `seguidores`
FROM SpotifyClone.Artista AS Art
JOIN SpotifyClone.Album AS Alb
ON Art.artista_id = Alb.artista_id
JOIN SpotifyClone.SeguindoArtistas AS Seg
ON Art.artista_id = Seg.artista_id
GROUP BY Seg.artista_id, Alb.album
ORDER BY `seguidores` DESC, Art.artista, Alb.album;

SELECT * FROM SpotifyClone.Album;
SELECT artista_id AS nome, COUNT(usuario_id) FROM SpotifyClone.SeguindoArtistas
GROUP BY artista_id;

-- REQUISITO 08:
-- Mostre uma relação dos álbuns produzidos por um artista específico, neste caso "Walter Phoenix". Para isto crie uma QUERY que o retorno deve exibir as seguintes colunas:
-- O nome da pessoa artista, com o alias "artista".
-- O nome do álbum, com o alias "album".
SELECT 
	Art.artista AS `artista`,
    Alb.album AS `album`
FROM SpotifyClone.Artista AS Art
JOIN SpotifyClone.Album AS Alb
ON Art.artista_id = Alb.artista_id
HAVING Art.artista = "Walter Phoenix"
ORDER BY Alb.album;

-- REQUISITO 09:
-- Crie uma QUERY que exibe a quantidade de músicas que estão presentes atualmente no histórico de reprodução de uma pessoa usuária específica. Para este caso queremos saber quantas músicas estão no histórico do usuário "Bill" e a consulta deve retornar a seguinte coluna:
-- O valor da quantidade, com o alias "quantidade_musicas_no_historico".
SELECT 
	IF(U.usuario = "Bill", COUNT(HR.cancoes_id), 1) AS `quantidade_musicas_no_historico`
FROM SpotifyClone.Usuario AS U
JOIN SpotifyClone.HistoricoReproducao AS HR
ON U.usuario_id = HR.usuario_id
GROUP BY U.usuario
ORDER BY `quantidade_musicas_no_historico` DESC LIMIT 1;

-- REQUISITO 10:
-- Crie uma QUERY que exiba o nome e a quantidade de vezes que cada canção foi tocada por pessoas usuárias do plano gratuito ou pessoal, de acordo com os detalhes a seguir:
-- A primeira coluna deve exibir o nome da canção, com o alias "nome";
-- A segunda coluna deve exibir a quantidade de pessoas que já escutaram aquela canção, com o alias "reproducoes";
-- Seus resultados devem estar agrupados pelo nome da canção e ordenados em ordem alfabética.

SELECT 
	C.cancoes AS `nome`,
	COUNT(HR.cancoes_id) AS `reproducoes`
    -- COUNT(HR.usuario_id)  
FROM SpotifyClone.Usuario AS U
JOIN SpotifyClone.HistoricoReproducao AS HR
ON U.usuario_id = HR.usuario_id
JOIN SpotifyClone.Cancoes AS C
ON C.cancoes_id = HR.cancoes_id
WHERE U.plano_id IN (1, 4)
GROUP BY HR.cancoes_id
ORDER BY C.cancoes;

-- REQUISITO 11
-- Crie uma QUERY que altere o nome de algumas músicas e as ordene em ordem alfabética com as colunas abaixo se baseando nos seguintes critérios:
-- O nome da música em seu estado normal com o alias nome_musica
-- O nome da música atualizado com o alias novo_nome
-- Critérios
-- Trocar a palavra "Streets" no final do nome de uma música por "Code Review"
-- Trocar a palavra "Her Own" no final do nome de uma música por "Trybe"
-- Trocar a palavra "Inner Fire" no final do nome de uma música por "Project"
-- Trocar a palavra "Silly" no final do nome de uma música por "Nice"
-- Trocar a palavra "Circus" no final do nome de uma música por "Pull Request"

UPDATE SpotifyClone.Cancoes
	SET cancoes = 'Without My Code Review'
    WHERE cancoes_id = 18;
    
UPDATE SpotifyClone.Cancoes
	SET cancoes = 'Dance With Trybe'
    WHERE cancoes_id = 3;

UPDATE SpotifyClone.Cancoes
	SET cancoes = 'Troubles Of My Project'
    WHERE cancoes_id = 4;

UPDATE SpotifyClone.Cancoes
	SET cancoes = "Let's Be Nice"
    WHERE cancoes_id = 15;
    
UPDATE SpotifyClone.Cancoes
	SET cancoes = 'Magic Pull Request'
    WHERE cancoes_id = 6;

