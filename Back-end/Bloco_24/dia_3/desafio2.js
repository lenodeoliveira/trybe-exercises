db.movies
  .find({ imdbRating: { $gt: 7 }, category: { $all: ["action"] } })
  .pretty();
