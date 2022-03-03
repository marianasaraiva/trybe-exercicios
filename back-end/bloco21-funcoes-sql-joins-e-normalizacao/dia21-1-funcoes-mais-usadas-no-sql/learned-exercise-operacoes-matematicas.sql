-- operações matematicas simples --
SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

-- aplicando nas colunas --
SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

-- encontrando o resto das divisões co  MOD --
SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0
SELECT 14 MOD 3; -- 2
SELECT 13 MOD 2; -- 1
SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5

-- exercicio de ficação com DIV E MOD --
SELECT IF(15 MOD 2 = 0, 'PAR', 'ÍMPAR') AS 'Par ou Ímpar';
SELECT 220 DIV 12;
SELECT IF(220 MOD 12 = 0, 'NÃO', CONCAT('SIM, ', 220 MOD 12));

-- exercicio de fixação com o arredondamentos e valores aleatórios --
SELECT FLOOR(15 + (RAND() * 5));
SELECT ROUND(15.7515971, 5);
SELECT FLOOR(39.494);