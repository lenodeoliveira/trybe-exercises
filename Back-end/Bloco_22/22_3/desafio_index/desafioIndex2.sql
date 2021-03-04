CREATE INDEX index_postal_code ON sakila.address(postal_code);
-- Mensure o custo com a seguinte query:
SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- deletando o índice
DROP INDEX index_postal_code ON sakila.address;