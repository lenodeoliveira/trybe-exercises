db.superheroes
  .find({
    $nor: [{ race: "Human" }, { "aspects.height": { $gt: 180 } }],
  })
  .pretty();
