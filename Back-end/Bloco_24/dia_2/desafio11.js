db.movies.updateOne(
  { title: "Batman" },
  {
    $set: {
      "cast.$[elemento].actor": ["Christian Bale"],
    },
  },
  { arrayFilters: [{ "elemento.character": "Batman" }] }
);

/* OR */

db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Batman",
  },
  {
    $push: { "cast.$.actor": "Christian Bale" },
  }
);

db.movies.updateOne(
  { title: "Batman" },
  {
    $set: {
      "cast.$[elemento].actor": ["Michael Caine"],
    },
  },
  { arrayFilters: [{ "elemento.character": "Alfred" }] }
);

/* OR */
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Alfred",
  },
  {
    $push: { "cast.$.actor": "Michael Caine" },
  }
);

db.movies.updateOne(
  { title: "Batman" },
  {
    $set: {
      "cast.$[elemento].actor": ["Heath Ledger"],
    },
  },
  { arrayFilters: [{ "elemento.character": "Coringa" }] }
);

/* OR */

db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Coringa",
  },
  {
    $push: { "cast.$.actor": "Heath Ledger" },
  }
);
