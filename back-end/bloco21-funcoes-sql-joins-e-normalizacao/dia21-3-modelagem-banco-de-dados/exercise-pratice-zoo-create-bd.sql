-- Entidades:
-- 	   animais
--     cuidador
--     gerente
--     cuidador_animal

-- Atributos:
-- 	animais: 
-- 		animal_id,
-- 		nome_animal,
-- 		sexo,
-- 		idade,
-- 		especie,
-- 		localizacao,
--         
-- 	gerente:
-- 		gerente_id PK,
--         nome_gerente
--         
-- 	cuidador:
-- 		cuidador_id PK,
--         nome_cuidador
--         gerente_id FK
--         
-- 	cuidador_animal:
-- 		cuidador_id FK,
--         gerente_id FK

CREATE DATABASE IF NOT EXISTS zoologico;
USE zoologico;

CREATE TABLE animais(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
	nome_animal VARCHAR(50) NOT NULL,
	sexo VARCHAR(50) NOT NULL,
	idade INT NOT NULL,
	especie VARCHAR(50) NOT NULL,
	localizacao VARCHAR(50) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE gerente(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
	nome_gerente VARCHAR(50) NOT NULL
)ENGINE=InnoDB;

CREATE TABLE cuidador(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
	nome_cuidador VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
	FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
)ENGINE=InnoDB;

CREATE TABLE cuidador_animal(
	animal_id INT NOT NULL,
    cuidador_id INT NOT NULL,
	FOREIGN KEY (cuidador_id) REFERENCES cuidador(cuidador_id),
	FOREIGN KEY (animal_id) REFERENCES animais(animal_id)
)ENGINE=InnoDB;
        
	
	