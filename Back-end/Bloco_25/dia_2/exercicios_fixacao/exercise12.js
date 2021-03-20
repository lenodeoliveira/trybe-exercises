db.products.aggregate(
  {
    $group: {
      _id: "name",
      totalValues: { $sum: "$sale_price" },
      totalQuantity: { $sum: "$quantity" },
    },
  },
  {
    $addFields: {
      valorEstoque: {
        $multiply: ["$totalValues", "$totalQuantity"],
      },
    },
  },
  {
    $project: {
      _id: 0,
      valorEstoque: 1,
    },
  }
);
