db.movies
  .find({
    ratings: { $size: 4 },
    imdbRating: { $not: { $lt: 7 } },
    $or: [
      { category: { $all: ["adventure"] } },
      { category: { $all: ["family"] } },
    ],
  })
  .pretty();

/* OR */

db.movies
  .find({
    $and: [
      { ratings: { $size: 4 } },
      { category: { $in: ["adventure", "family"] } },
      { imdbRating: { $not: { $lt: 7 } } },
    ],
  })
  .pretty();
