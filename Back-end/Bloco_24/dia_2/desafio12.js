db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      "cast.$[elemento].actor": {
        $each: ["Michael Keaton", "Val Kilmer", "George Clooney"],
        $sort: 1,
      },
    },
  },
  { arrayFilters: [{ "elemento.character": "Batman" }] }
);

/*OR*/

db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Batman",
  },
  {
    $push: {
      "cast.$.actor": {
        $each: ["Michael Keaton", "Val Kilmer", "George Clooney"],
        $sort: 1,
      },
    },
  }
);
