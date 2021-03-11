db.restaurants
  .find({ $nor: [{ rating: { $eq: 1 } }, { cuisine: "American" }] })
  .count();
