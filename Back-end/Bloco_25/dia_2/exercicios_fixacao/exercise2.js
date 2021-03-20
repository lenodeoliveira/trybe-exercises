db.clients.aggregate([
  {
    $lookup: {
      from: "transactions",
      localField: "name",
      foreignField: "from",
      as: "transactions_clients",
    },
  },
  { $limit: 4 },
]);
