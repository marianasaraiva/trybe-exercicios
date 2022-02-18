Agora a prática: 
Exercício 1 : Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o MySql Workbench .
R: CLicar com o botão direito emcima da tabela e selecionar em "select rows - limit 1000"

Exercício 2 : Descubra como é possível criar uma tabela sem usar código SQL usando o MySql Workbench .
R: Clicar com o botão direito em create table

Exercício 3 : Feito isso, crie uma tabela com as seguintes restrições:
Nome da tabela: Filme
Colunas:
FilmeId - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
Descricao - não permite nulos, tipo texto (varchar(100));
AnoLancamento - não permite nulos, tipo int;
Nota - permite nulos, tipo int;
R: Tabela criada no MySQL.

Exercício 4 : Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.
R: country

Exercício 5 : Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country ?
R: UM para MUITOS (N:1)

Exercício 6 : Qual tipo de relacionamento a tabela country faz com a tabela city ?
R: MUITOS PARA UM (1:N)

Exercício 7 : Abra tabela por tabela do banco sakila e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.
R: store -> staff ; language -> film ; film -> language