CREATE VIEW film_with_categories AS
SELECT F.title, C.category_id, C.`name`FROM sakila.category AS C
INNER JOIN sakila.film_category AS FC ON C.category_id = FC.category_id
INNER JOIN sakila.film AS F ON F.film_id = FC.film_id
ORDER BY F.title;

SELECT * FROM film_with_categories;
