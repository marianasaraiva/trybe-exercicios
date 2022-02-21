Parte 01:  SELECT
1- Monte uma query que exiba seu nome na tela;
2- Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;
3- Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL ( alias é como um apelido no português);
4- Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT ;
5- Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".

Respostas:
SELECT 'Mariana';
SELECT 'Mariana', 'Saraiva', 'Belo Horizonte', 36;
SELECT 'Mariana' AS nome, 'Saraiva' AS sobrenome, 'Belo Horizonte' AS 'cidade natal', 36 AS idade;
SELECT 13 * 8;
SELECT now() AS 'Data Atual';


Parte 02: SELECT
1- Escreva uma query que selecione todas as colunas da tabela city ;
2- Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer ;
3- Escreva uma query que exiba todas as colunas da tabela rental ;
4- Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film ;
5- Utilize o SELECT para explorar todas as tabelas do banco de dados.

Respostas: 
SELECT * FROM sakila.city;
SELECT first_name,last_name FROM sakila.customer;
SELECT * FROM sakila.rental;
SELECT title,description,release_year FROM sakila.film;
SELECT * FROM sakila;

PARTE 03: CONCAT
Respostas:
SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM sakila.film;
SELECT CONCAT(title, ' ', rating) AS Classificação FROM sakila.film;
SELECT CONCAT(address, ' ', district) AS Endereço FROM sakila.address;

PARTE 04: DISTINCT
Repostas:
SELECT DISTINCT Nome, Idade FROM Alunos;
SELECT DISTINCT Nome FROM Alunos;
SELECT DISTINCT Idade FROM Alunos;

PARTE 05: COUNT
RESPOSTAS: 
SELECT COUNT(*) FROM sakila.staff;
SELECT COUNT(first_name) FROM sakila.staff;
SELECT COUNT(email) FROM sakila.staff;

PARTE 06: LIMITE
RESPOSTA:
SELECT * FROM sakila.rental LIMIT 10;

PARTE 07: OFFSET
RESPOSTA:
SELECT * FROM sakila.actor LIMIT 10 OFFSET 5;

PARTE 08: ORDERBY
RESPOSTA:
SELECT * FROM sakila.address ORDER BY district ASC, address DESC;

PARTE 09: CONDENSANDO OS CONHECIMENTOS:
table sakila.film:
SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT COUNT(*) FROM sakila.film;

table sakila.actor:
SELECT DISTINCT first_name, last_name FROM sakila.actor ORDER BY last_name DESC;
SELECT COUNT(DISTINCT first_name, last_name) FROM sakila.actor ORDER BY last_name DESC;
SELECT DISTINCT first_name, last_name FROM sakila.actor ORDER BY first_name ASC, last_name DESC;

table sakila.language:
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;

table sakila.film:
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film ORDER BY length DESC, replacement_cost ASC LIMIT 20;



