db.products.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      discount: {
        $divide: ["$sale_price", 2],
      },
    },
  },
]);
