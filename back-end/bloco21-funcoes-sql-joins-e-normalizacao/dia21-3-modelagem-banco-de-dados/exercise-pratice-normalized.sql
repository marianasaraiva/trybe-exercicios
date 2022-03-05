-- Normalização exercicios 2 ao 4:
-- Exercicio 2:
TABELA RESIDENCIA NORMALIZADA							
residencia_id	residencia_locador	tipo	endereco	numero	cidade	estado	inquilinos
1	Doren Fatima	casa	Rua Norte Sul	35	Belo Horizonte	MG	João, Mária, Carlos
2	Ramon Johathan	apartamento	Av Rodrigues Ramos	950	Salvador	BA	Sebastião, Alfredo
3	Vanderson Judis	apartamento	Rua Brusque	352	Ipatinga	MG	Marta, Marizete
4	Carolina Rude	casa	Av Atlantica	254	Camboriú	SC	Letíce, Laísa, Bartolomeu

TABELA INQUILINONORMALIZADA		
inquilino_id	residencia_id	nome
1	1	João
2	1	Maria
3	1	Carlos
4	2	Sebastião
5	2	Alfredo
6	3	Marta
7	3	Marizete
8	4	Letíce
9	4	Laísa
10	4	Bartolomeu

-- Exercicio 3:
TABELA HEROI				
heroi_id	heroi	liga_id	universo_id	criador_id
1	Homem Aranha	1	1	1
2	Jean Grey	2	1	2
3	Flash	3	2	3
4	Batman	3	2	4

TABELA LIGA		
liga_id	liga	universo_id
1	Avengers	1
2	X-Men	2
3	Justice League	1

TABELA CRIADOR		
heroi_id	criador	criador_idade
1	Stan Lee	95
2	Gardner Fox	75
3	Bill Finger	60
4	Len Wein	69

TABELA UNIVERSO	
universo_id	universo
1	Marvel
2	DC


-- Exercicio 4:
TABELA FILME		
filme_id	genero_id	valor_entrada
1	1	27,90
2	2	30,70
3	2	26,25
4	3	17,80
5	4	21,50
6	4	18,00
7	5	15,75

TABELA GENERO	
genero_id	genero
1	Ação
2	Biográfico
3	Comédia
4	Drama
5	Comédia Romântica




