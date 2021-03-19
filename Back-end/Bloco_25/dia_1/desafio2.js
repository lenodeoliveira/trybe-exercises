db.clientes.aggregate([
  {
    $project: {
      nome: "$nome",
      createdAt: "$dataNascimento",
      year: { $year: "$dataNascimento" },
      sexo: "$sexo",
    },
  },
  {
    $match: {
      $and: [{ year: { $gte: 1995, $lt: 2005 } }, { sexo: "FEMININO" }],
    },
  },
]);

/* OR */
db.clientes.aggregate([
  {
    $match: {
      sexo: "FEMININO",
      dataNascimento: {
        $gte: ISODate("1995-01-01"),
        $lte: ISODate("2005-12-31"),
      },
    },
  },
]);
