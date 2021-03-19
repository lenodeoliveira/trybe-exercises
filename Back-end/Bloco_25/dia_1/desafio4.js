db.clientes.aggregate([
  {
    $group: {
      _id: "$endereco.uf",
      total: { $sum: 1 },
    },
  },
  {
    $match: { _id: "SC" },
  },
  {
    $project: {
      _id: 0,
      _id: "$_id",
      total: "$total",
    },
  },
]);

/* OR */

db.clientes.aggregate([
  {
    $match: {
      "endereco.uf": "SC",
    },
  },
  {
    $group: {
      _id: "SC",
      total: { $sum: 1 },
    },
  },
]);
