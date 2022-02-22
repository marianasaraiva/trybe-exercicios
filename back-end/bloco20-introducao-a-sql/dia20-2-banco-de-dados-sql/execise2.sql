SELECT DISTINCT first_name, last_name FROM sakila.actor ORDER BY last_name DESC;
    
SELECT COUNT(DISTINCT first_name, last_name) FROM sakila.actor ORDER BY last_name DESC;

SELECT DISTINCT first_name, last_name FROM sakila.actor ORDER BY first_name ASC, last_name DESC;