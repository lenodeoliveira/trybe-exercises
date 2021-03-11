db.restaurants
  .find({
    $and: [
      { borough: { $in: ["Queens", "Staten Island", "Brooklyn"] } },
      { rating: { $gt: 4 } },
    ],
  })
  .count();
