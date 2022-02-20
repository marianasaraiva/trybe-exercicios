Parte 01: 
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


Parte 02:
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
