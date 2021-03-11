db.superheroes
  .find({
    $and: [
      {
        $or: [{ race: "Human" }, { race: "Mutant" }],
      },
      {
        "aspects.weight": { $gte: 80, $lte: 100 },
      },
      {
        publisher: { $ne: "Marvel Comics" },
      },
    ],
  })
  .pretty();
