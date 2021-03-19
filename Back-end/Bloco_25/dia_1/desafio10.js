db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalCompras: {
        $sum: 1,
      },
    },
  },
  {
    $match: { totalCompras: { $gt: 5 } },
  },
  {
    $group: {
      _id: null,
      clientes: { $sum: 1 },
    },
  },
  { $project: { _id: 0 } },
]);

/**OR */

db.vendas.aggregate([
  {
    $group: {
      _id: "$clienteId",
      totalCompras: {
        $sum: 1,
      },
    },
  },
  {
    $match: {
      totalCompras: { $gt: 5 },
    },
  },
  {
    $count: "clientes",
  },
]);
