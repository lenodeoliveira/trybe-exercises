db.restaurants
  .find({
    $and: [
      {
        $or: [{ rating: { $gt: 6, $lt: 10 } }],
      },
      {
        $or: [{ borough: "Brooklyn" }, { cuisine: { $ne: "American" } }],
      },
    ],
  })
  .count();
