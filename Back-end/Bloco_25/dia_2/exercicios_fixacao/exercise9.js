db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      totalEmEstoque: {
        $multiply: ["$sale_price", "$quantity"],
      },
    },
  },
]);
