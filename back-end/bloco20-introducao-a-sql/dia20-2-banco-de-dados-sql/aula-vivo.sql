USE livaria;

SELECT * FROM livraria.livros;
SELECT COUNT(*) FROM livraria.livros;
SELECT * FROM livraria.livros ORDER BY vendas DESC LIMIT 3;
SELECT * FROM livraria.livros ORDER BY paginas DESC LIMIT 1;
SELECT * FROM livraria.livros WHERE titulo <> 'Qualque titulo';