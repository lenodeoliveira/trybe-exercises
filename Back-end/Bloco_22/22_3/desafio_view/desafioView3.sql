CREATE VIEW address_info AS
SELECT AD.address_id, AD.address, AD.district, CI.city_id, CI.city
FROM sakila.address AS AD
INNER JOIN sakila.city AS CI ON CI.city_id = AD.city_id
ORDER BY CI.city;

SELECT * FROM address_inf