SELECT * FROM sakila.staff;
SELECT * FROM sakila.actor;
SELECT * FROM sakila.category;

INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES ('Mariana', 'Saraiva', 3, 'mari@teste.com', 1, 1, 'Mari', 'teste1234');

INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES 
	('Manoela', 'Moss', 3, 'manu@teste.com', 2, 1, 'Manu', 'moss1234'),
	('Maria', 'Abraao', 2, 'maria@gmail.com', 1, 1, 'olivia', 'olivia12345');
    
INSERT INTO sakila.actor(first_name, last_name)
    SELECT first_name, last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5;

INSERT INTO sakila.category (name)
VALUES
    ('Sci-Fi'),
    ('Fantasy'),
    ('Biography');

INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3);