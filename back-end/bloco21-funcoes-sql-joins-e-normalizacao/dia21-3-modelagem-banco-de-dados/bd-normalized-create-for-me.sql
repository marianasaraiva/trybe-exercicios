CREATE DATABASE IF NOT EXISTS normalization;
USE normalization;
CREATE TABLE funcionario (
	Funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(50) NOT NULL, 
    Sobrenome VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Telefone VARCHAR(50) NOT NULL,
    DataCadastro DATETIME
)ENGINE=InnoDB;
    
CREATE TABLE setores(
    Setor_id INT PRIMARY KEY AUTO_INCREMENT,
    Nome_setor VARCHAR(50)
)ENGINE=InnoDB;  

CREATE TABLE funcionario_setor(
	Funcionario_id INT NOT NULL,
    Setor_id INT NOT NULL,
	FOREIGN KEY (Funcionario_id) REFERENCES funcionario(Funcionario_id),
    FOREIGN KEY (Setor_id) REFERENCES setores(Setor_id)
)ENGINE=InnoDB;

INSERT INTO funcionario(Nome, Sobrenome, Email, Telefone, DataCadastro)
	VALUES
		('Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', NOW()),
        ('André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', NOW()),
        ('Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', NOW()),
        ('Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', NOW());

INSERT INTO setores(Nome_setor)
	VALUES
		('Administração'), 
        ('Vendas'),
        ('Operacional'),
        ('Estratégico'),
        ('Marketing');

INSERT INTO funcionario_setor(Funcionario_id, Setor_id) 
	VALUES
		(1,1), (1,2), (2,2), (3,4), (3,2), (4,5);



