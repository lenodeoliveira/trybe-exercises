db.vendas.aggregate([
  {
    $match: {
      dataVenda: {
        $gte: ISODate("2020-03-01"),
        $lte: ISODate("2020-03-31"),
      },
      status: "EM SEPARACAO",
    },
  },
  {
    $addFields: {
      dataEntregaPrevista: {
        $add: ["$dataVenda", 3 * 24 * 60 * 60000],
      },
    },
  },
  {
    $project: {
      _id: 0,
      clienteId: 1,
      dataVenda: 1,
      dataEntregaPrevista: 1,
    },
  },
]);
