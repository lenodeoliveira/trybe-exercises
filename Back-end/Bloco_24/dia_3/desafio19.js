db.movies.find({ description: { $regex: /humanity/ } });
/* OR */
db.movies
  .find({
    description: {
      $regex: /humanity.$/,
    },
  })
  .pretty();
