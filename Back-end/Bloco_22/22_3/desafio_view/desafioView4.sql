CREATE VIEW movies_languages AS
SELECT F.title, F.language_id, L.`name` AS `language`
FROM sakila.film AS F
INNER JOIN sakila.`language` AS L ON L.language_id = F.language_id;

SELECT * FROM movies_languages;