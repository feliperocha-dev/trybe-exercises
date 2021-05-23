-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( internationa_sales ) de cada filme.
SELECT 
    M.title, B.domestic_sales, B.international_sales
FROM
    Movies M
        INNER JOIN
    BoxOffice B ON M.id = B.movie_id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais
-- ( internationa_sales ) do que vendas nacionais ( domestic_sales ).
SELECT 
    M.title, B.domestic_sales, B.international_sales
FROM
    Movies M
        INNER JOIN
    BoxOffice B ON M.id = B.movie_id
WHERE B.domestic_sales < B.international_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT 
    M.title, B.rating
FROM
    Movies M
        INNER JOIN
    BoxOffice B ON M.id = B.movie_id
ORDER BY B.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e,
-- adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    t.`name`,
    t.location,
    m.title,
    m.`year`,
    m.length_minutes,
    m.director
FROM
    Theater t
        LEFT JOIN
    Movies m ON t.id = m.theater_id
ORDER BY t.`name`;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e,
-- adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    t.`name`,
    t.location,
    m.title,
    m.`year`,
    m.length_minutes,
    m.director
FROM
    Theater t
        RIGHT JOIN
    Movies m ON t.id = m.theater_id
ORDER BY t.`name`;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT m.title FROM Movies m INNER JOIN BoxOffice b ON m.id = b.movie_id WHERE rating > 7.5;
SELECT title FROM Movies WHERE id IN (SELECT movie_id FROM BoxOffice WHERE rating > 7.5);

-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
SELECT m.title, b.rating FROM Movies m INNER JOIN BoxOffice b ON m.id = b.movie_id WHERE m.year > 2009;
SELECT title, (SELECT rating FROM BoxOffice where movie_id = id) FROM Movies WHERE id IN (SELECT movie_id FROM BoxOffice WHERE year > 2009);

-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT `name`, location FROM Theater t WHERE EXISTS (SELECT * FROM Movies WHERE theater_id = t.id);

-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT `name`, location FROM Theater t WHERE NOT EXISTS (SELECT * FROM Movies WHERE theater_id = t.id);

-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação maior que 8.

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo diretor.
SELECT a.title, a.length_minutes, b.title, b.length_minutes FROM Movies a, Movies b WHERE a.director = b.director AND a.title != b.title;

-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN ,
-- que retornem o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
SELECT 
    m.title
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON m.id = b.movie_id
WHERE
    m.length_minutes > 110
        AND (b.international_sales + b.domestic_sales) > 500000000;
        
SELECT 
    title
FROM
    Movies
WHERE length_minutes > 110  AND id IN(SELECT movie_id FROM BoxOffice WHERE (international_sales + domestic_sales) > 500000000);