db.products.aggregate([
  {
    $project: {
      _id: 0,
      menor: { $round: ["$purchase_price"] },
    },
  },
  { $sort: { menor: 1 } },
  { $limit: 1 },
]);
