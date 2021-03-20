db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      total: {
        $add: ["$purchase_price", "$taxes", "$sale_price"],
      },
    },
  },
]);
