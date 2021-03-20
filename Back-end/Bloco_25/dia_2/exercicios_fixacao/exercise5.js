db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      lucroTotal: {
        $subtract: ["$sale_price", { $add: ["$purchase_price", "$taxes"] }],
      },
    },
  },
]);
