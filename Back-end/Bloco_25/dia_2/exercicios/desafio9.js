db.vendas.aggregate([
  {
    $match: {
      "itens.nome": "QUEIJO PRATO",
    },
  },
  { $unwind: "$itens" },
  {
    $match: {
      "itens.nome": "QUEIJO PRATO",
    },
  },
  {
    $group: {
      _id: "$clienteId",
      totalConsumido: {
        $sum: "$itens.quantidade",
      },
    },
  },
  {
    $sort: { totalConsumido: -1 },
  },
  { $limit: 1 },
  {
    $lookup: {
      from: "clientes",
      localField: "_id",
      foreignField: "clienteId",
      as: "cliente",
    },
  },
  { $unwind: "$cliente" },
  {
    $project: {
      nomeCliente: "$cliente.nome",
      uf: "$cliente.endereco.uf",
      totalConsumido: "$totalConsumido",
      _id: 0,
    },
  },
]);
