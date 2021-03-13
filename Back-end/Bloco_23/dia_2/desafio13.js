db.movies.update(
  {
    $and: [
      {
        $or: [{ title: "Batman" }, { title: "Home Alone" }],
      },
      { imdbRating: { $lt: 17 } },
    ],
  },
  { $set: { imdbRating: 17 } }
);

/* OR */
db.movies.updateMany(
  {
    $or: [{ title: "Batman" }, { title: "Home Alone" }],
  },
  {
    $max: {
      imdbRating: 17,
    },
  }
);
