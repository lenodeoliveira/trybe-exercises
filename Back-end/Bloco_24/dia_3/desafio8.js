db.movies.find(
  {
    $and: [
      { ratings: { $elemMatch: { $gte: 64, $lte: 105 } } },
      { ratings: { $mod: [9, 0] } },
    ],
  },
  { _id: 0, title: 1, ratings: 1 }
);

/* OR */

db.movies
  .find(
    {
      ratings: {
        $elemMatch: { $gte: 64, $lte: 105, $mod: [9, 0] },
      },
    },
    {
      _id: 0,
      title: 1,
      ratings: 1,
    }
  )
  .pretty();
