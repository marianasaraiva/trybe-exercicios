SELECT * FROM Music.album;
SELECT * FROM Music.albumGenre;
SELECT * FROM Music.artist;
SELECT * FROM Music.genres;
SELECT * FROM Music.track;
SELECT * FROM Music.user;

-- Qual a duracao da playlist da tribo A em minutos?
-- Opção Mateus
SELECT SUM(T.duration)/60 FROM Music.track AS T JOIN Music.user AS U ON.trybe = 'A';

-- Resolução Trybe
SELECT SUM(T.duration)/60
FROM Music.track T
INNER JOIN Music.user U
ON T.user_id = U.id
WHERE U.tribe = "A";

-- Qual a duracao da playlist da tribo B em minutos?
-- Opção Mateus
SELECT SUM(T.duration)/60 FROM Music.track AS T JOIN Music.user AS U ON.trybe = 'B';

-- Resolução Trybe
SELECT SUM(T.duration)/60
FROM Music.track T
INNER JOIN Music.user U
ON T.user_id = U.id
WHERE U.tribe = "B";

-- Quantas músicas cada pessoa adicionou na playlist?
-- Nome e quantidade de músicas pelo maior numero de musicas incluídas por pessoas
SELECT U.display_name, COUNT(T.user_id) AS quantidade
FROM Music.user U
JOIN Music.track T
ON T.user_id = U.id
GROUP BY U.id ORDER BY quantidade DESC;


