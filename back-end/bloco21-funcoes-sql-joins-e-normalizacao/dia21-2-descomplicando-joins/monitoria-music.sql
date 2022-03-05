SELECT * FROM Music.album;
SELECT * FROM Music.albumGenre;
SELECT * FROM Music.artist;
SELECT * FROM Music.genres;
SELECT * FROM Music.track;
SELECT * FROM Music.user;

-- 1- Qual a duracao da playlist da tribo A em minutos?
-- Opção Mateus
SELECT SUM(T.duration)/60 FROM Music.track AS T JOIN Music.user AS U ON.trybe = 'A';

-- Resolução Trybe
SELECT SUM(T.duration)/60
FROM Music.track T
INNER JOIN Music.user U
ON T.user_id = U.id
WHERE U.tribe = "A";

-- 1.1- Qual a duracao da playlist da tribo B em minutos?
-- Opção Mateus
SELECT SUM(T.duration)/60 FROM Music.track AS T JOIN Music.user AS U ON.trybe = 'B';

-- Resolução Trybe
SELECT SUM(T.duration)/60
FROM Music.track T
INNER JOIN Music.user U
ON T.user_id = U.id
WHERE U.tribe = "B";

-- 2- Quantas músicas cada pessoa adicionou na playlist?
-- Nome e quantidade de músicas pelo maior numero de musicas incluídas por pessoas
SELECT U.display_name, COUNT(T.user_id) AS quantidade
FROM Music.user U
JOIN Music.track T
ON T.user_id = U.id
GROUP BY U.id ORDER BY quantidade DESC;

-- Resolução Trybe:
SELECT u.display_name, COUNT(*) quantidade_musicas FROM track t JOIN user u ON u.id = t.user_id GROUP BY t.user_id ORDER BY quantidade_musicas DESC;

-- 2.1 - Filtre o exercício anterior por tribos: A e B.
SELECT u.display_name, COUNT(*) quantidade_musicas FROM track t JOIN user u ON u.id = t.user_id WHERE u.tribe = 'A' GROUP BY t.user_id ORDER BY quantidade_musicas DESC;
SELECT u.display_name, COUNT(*) quantidade_musicas FROM track t JOIN user u ON u.id = t.user_id WHERE u.tribe = 'B' GROUP BY t.user_id ORDER BY quantidade_musicas DESC;

-- 3 - Quais albuns possuem duração maior que 10 min?
-- mostre no resultado o nome do album e a duração em minutos
SELECT al.name, ROUND(SUM(t.duration) / 60, 2) AS duracao FROM track t JOIN album al ON t.album_id = al.id GROUP BY al.id HAVING duracao > 10
ORDER BY duracao DESC;

-- 4 - Qual a quantidade de albuns lançados de cada artista?
-- - mostre no resultado o nome do artista e a quantidade de albuns
-- - Mostre na ordem decrescente de acordo com a quantidade de albuns.
SELECT a.name nome_artista, COUNT(al.id) quantidade_albuns FROM album al
JOIN artist a ON al.artist_id = a.id GROUP BY a.id ORDER BY quantidade_albuns DESC;

-- 5 - Qual a quantidade de musica de cada artista?
-- - Mostre no resultado o nome do artista e a quantidade de musicas
-- - Mostre na ordem decrescente de acordo com a quantidade de musicas.
SELECT a.name nome_artista, COUNT(t.id) quantidade_musicas FROM track t JOIN album al ON al.id = t.album_id
JOIN artist a ON al.artist_id = a.id GROUP BY nome_artista ORDER BY quantidade_musicas DESC;

-- 6 - Qual o album mais antigo da playlist?
-- - Mostre no resultado o nome do album e a data de lançamento
SELECT a.name nome, a.release_date data FROM album a ORDER BY a.release_date ASC LIMIT 1;

-- 7 - Qual o album mais novo da playlist?
-- - Mostre no resultado o nome do album e a data de lançamento
SELECT a.name nome, a.release_date data FROM album a ORDER BY a.release_date DESC LIMIT 1;

-- 8 - Quantos albuns existem por gênero?
-- - Mostre no resultado o nome do gênero e a quantidade de albuns
-- - Mostre em ordem descrescente de acordo com a quantidade de albuns
SELECT g.genre gênero, COUNT(a.id) quantidade_album FROM album a JOIN albumGenre ag ON ag.album_id = a.id
JOIN genres g ON ag.genre_id = g.id GROUP BY g.id ORDER BY quantidade_album DESC;


