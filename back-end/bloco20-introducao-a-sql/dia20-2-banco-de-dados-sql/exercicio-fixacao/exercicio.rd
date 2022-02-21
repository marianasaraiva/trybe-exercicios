Perguntas:
1- Escreva uma query para exibir a string "This is SQL Exercise, Practice and Solution".
2- Escreva uma query para exibir três números em três colunas.
3- Escreva uma query para exibir a soma dos números 10 e 15.
4- Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
5- Escreva uma query para exibir todas as informações de todos os cientistas.
6- Escreva uma query para exibir o nome como "Nome do Projeto" e as horas como "Tempo de Trabalho" de cada projeto.
7- Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
8- Escreva uma query para exibir o nome dos Projetos em ordem alfabética descendente.
9- Escreva uma query que exiba a string "O projeto Name precisou de Hours horas para ser concluído." para cada projeto.
10- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
11- Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
12- Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
13- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
14- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
15- Escreva uma query que exiba a string "Existem Number cientistas na tabela Scientists.", em que Number se refira a quantidade de cientistas.

Respostas:
USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1, 2, 3;
SELECT 10 + 15;
SELECT (2*5)+10;
SELECT * FROM Scientists;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Projects;
SELECT Name FROM Scientists ORDER BY Name ASC;
SELECT Name FROM Projects ORDER BY Name DESC;
SELECT CONCAT('O Projeto ', Name, ' precisou de', Hours, ' para ser concluído.') as resultado FROM Projects;
SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3;
SELECT DISTINCT Project FROM AssignedTo;
SELECT Name FROM Projects ORDER BY Hours DESC LIMIT 1;
SELECT Name FROM Projects ORDER BY Hours ASC LIMIT 1 OFFSET 1;
SELECT * FROM Projects ORDER BY Hours ASC LIMIT 5;
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') as resultado FROM Scientists;