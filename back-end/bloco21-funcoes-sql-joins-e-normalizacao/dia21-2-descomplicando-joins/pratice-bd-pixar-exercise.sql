SELECT movie_id, rating, domestic_sales, international_sales FROM Pixar.BoxOffice;
SELECT id, title, director, year, length_minutes, theater_id FROM Pixar.Movies;
SELECT id, `name`, location FROM Pixar.Theater;

-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( international_sales ) de cada filme.
SELECT
    m.title, b.domestic_sales, b.international_sales
FROM
    Pixar.Movies AS m
INNER JOIN
    Pixar.BoxOffice AS b 
ON b.movie_id = m.id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( international_sales ) do que vendas nacionais ( domestic_sales ).
SELECT
    m.title,
    (b.domestic_sales + b.international_sales) AS 'Vendas'
FROM
    Pixar.Movies AS m
INNER JOIN
    Pixar.BoxOffice AS b 
ON b.movie_id = m.id
WHERE b.international_sales > b.domestic_sales; 

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT
	M.title,
    B.rating
FROM 
	Pixar.Movies M
INNER JOIN 
	Pixar.BoxOffice B
ON B.movie_id = M.id
ORDER BY B.rating DESC;
  
-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
	T.name,	
    T.location,
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM Pixar.Theater T
LEFT JOIN Pixar.Movies M
ON T.id = M.theater_id
ORDER BY T.name;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
	T.id,
	T.name,	
    T.location,
    M.title,
    M.director,
    M.year,
    M.length_minutes
FROM Pixar.Theater T
RIGHT JOIN Pixar.Movies M
ON T.id = M.theater_id
ORDER BY T.name;

-- Exercício 6: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8.
SELECT 
	M.id,
    M.title,
    M.director,
    M.year,
    M.length_minutes, 
    M.theater_id
FROM Pixar.Movies M
INNER JOIN
	Pixar.BoxOffice B
ON B.movie_id = M.id
WHERE B.rating > 8 AND M.theater_id IS NOT NULL;

-- Gabarito
SELECT
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
FROM
    Pixar.Movies m
        INNER JOIN
    Pixar.BoxOffice b ON b.movie_id = m.id
WHERE
    b.rating > 8
        AND m.theater_id IS NOT NULL;