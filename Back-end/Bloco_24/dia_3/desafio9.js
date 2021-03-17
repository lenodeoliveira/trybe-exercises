db.movies.find(
  {
    $and: [
      { category: { $all: ["adventure"] } },
      { ratings: { $elemMatch: { $gt: 103 } } },
    ],
  },
  { _id: 0, title: 1, ratings: 1, category: 1 }
);

/* OR */

db.movies
  .find(
    {
      ratings: {
        $elemMatch: { $gt: 103 },
      },
      category: { $all: ["adventure"] },
    },
    {
      _id: 0,
      title: 1,
      ratings: 1,
      category: 1,
    }
  )
  .pretty();
