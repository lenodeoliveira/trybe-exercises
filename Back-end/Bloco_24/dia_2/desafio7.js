db.movies.updateMany(
  {
    $or: [{ title: "Batman" }, { title: "Home Alone" }],
  },
  {
    $push: {
      category: "90's",
    },
  }
);

/*OR */

db.movies.updateMany(
  {
    title: {
      $in: ["Batman", "Home Alone"],
    },
  },
  {
    $push: { category: "90's" },
  }
);
