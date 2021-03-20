db.products.aggregate([
  {
    $addFields: {
      lucroTotal: {
        $subtract: ["$sale_price", { $add: ["$purchase_price", "$taxes"] }],
      },
    },
  },
  {
    $project: {
      _id: 0,
      name: 1,
      lucroEstoque: {
        $multiply: ["$lucroTotal", "$quantity"],
      },
    },
  },
]);
