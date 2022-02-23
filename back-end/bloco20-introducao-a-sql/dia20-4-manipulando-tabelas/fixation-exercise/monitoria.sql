-- Monitoria hoje--
SELECT * FROM Music.tracks;

-- Qtas musicas possuem a tabela --
SELECT COUNT(*) FROM Music.tracks;

-- Filtrando por tribo as musicas -- 
SELECT COUNT(*) FROM Music.tracks WHERE tribo = 'B';

-- Musica com maior duração --
SELECT * FROM Music.tracks ORDER BY duration DESC LIMIT 1;

-- Musica mais antiga --
SELECT * FROM Music.tracks ORDER BY release_date LIMIT 1;

-- Album maior nome e Musica com maior nome --
-- diferença entre eles: char_length é a qtd de caracteres e o length é em bits
-- Album -- 
SELECT * FROM Music.tracks ORDER BY char_length(album) DESC LIMIT 1;
-- Nome --
SELECT * FROM Music.tracks ORDER BY length(`name`) DESC LIMIT 1;

-- 3 Musicas com maior duração lançadas no mês de outubro --
SELECT * FROM Music.tracks WHERE MONTH(release_date) = 10 ORDER BY duration DESC LIMIT 3;
SELECT * FROM Music.tracks WHERE release_date LIKE '____-10-%' ORDER BY duration DESC LIMIT 3;
SELECT * FROM Music.tracks WHERE release_date LIKE "%-10-%" ORDER BY duration DESC LIMIT 3;

