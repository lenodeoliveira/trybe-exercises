# :rocket: EXERCÍCIOS AGGREGATE FRAMEWORK AULA 1 :game_die:

### INSTRUÇÕES PARA CRIAR O BANCO E SUAS COLEÇÕES :wrench:

- [x] 1: Faça o download dos arquivos json , clicando com o botão direito e escolhando a opção "Salvar como":

  - clientes
  - produtos
  - vendas

- [x] 2: Faça a importação para sua instância do MongoDB:
      `use erp`
      `mongoimport --db erp collections/clientes.json`
      `mongoimport --db erp collections/produtos.json`
      `mongoimport --db erp collections/vendas.json`

- [x] 3: Conecte-se à sua instância e confira o número de documentos em cada coleção:

  - `use erp`;
  - `db.clientes.count()`;
  - `db.produtos.count()`;
  - `db.vendas.count()`;

#### EXERCÍCIOS

- [x] 1: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "MASCULINO".
- [x] 2: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005.
- [x] 3: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 , limitando a quantidade de documentos retornados em 5 .
- [x] 4: Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o campo \_id contenha a UF e outro campo com o total.
- [x] 5: Agrupe os clientes por sexo . Retorne o total de clientes de cada sexo no campo total .
- [x] 6:Agrupe os clientes por sexo e uf. Retorne o total de clientes de cada sexo no campo total .
- [x] 7: Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos): `{ "estado": "SP", "sexo": "MASCULINO", "total": 100 }`
- [x] 8: Descubra quais são os 5 clientes que gastaram o maior valor.
- [x] 9: Descubra quais são os 10 clientes que gastaram o maior valor no ano de 2019.
- [x] 10: Descubra quantos clientes compraram mais de 5 vezes. Retorne um documento que contenha somente o campo clientes com o total de clientes.
      Dica: O operador $count pode simplificar sua query
- [x] 11: Descubra quantos clientes compraram menos de três vezes entre os meses de Janeiro de 2020 e Março de 2020.
- [x] 12:Descubra quais as três uf s que mais compraram no ano de 2020 . Retorne os documentos no seguinte formato: `{ "totalVendas": 10, "uf": "SP" }`
- [x] 13: Encontre qual foi o total de vendas e a média de vendas de cada uf no ano de 2019 . Ordene os resultados pelo nome da uf . Retorne os documentos no seguinte formato: `{ "_id": "MG", "mediaVendas": 9407.129225352113, "totalVendas": 142 }`
