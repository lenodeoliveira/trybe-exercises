db.movies.updateOne(
  { title: "Home Alone" },
  {
    $set: {
      "cast.$[elemento].character": "Marv",
    },
  },
  { arrayFilters: [{ "elemento.actor": "Daniel Stern" }] }
);

/* OR */

db.movies.updateOne(
  {
    title: "Home Alone",
    "cast.actor": "Daniel Stern",
  },
  {
    $set: { "cast.$.character": "Marv" },
  }
);
