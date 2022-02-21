SELECT * FROM sakila.language LIMIT 5 OFFSET 1;
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film ORDER BY length DESC, replacement_cost ASC LIMIT 20;