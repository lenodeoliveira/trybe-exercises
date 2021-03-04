CREATE VIEW  film_info AS
SELECT A.actor_id,
CONCAT(A.first_name, ' ', A.last_name) AS `ACTOR`,
F.title
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS FA ON FA.actor_id = A.actor_id
INNER JOIN sakila.film AS F ON F.film_id = FA.film_id
ORDER BY `ACTOR`;

SELECT * FROM film_info;