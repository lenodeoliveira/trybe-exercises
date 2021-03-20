db.products.aggregate([
  {
    $project: {
      _id: 0,
      maior: { $round: ["$purchase_price"] },
    },
  },
  { $sort: { maior: -1 } },
  { $limit: 1 },
]);
