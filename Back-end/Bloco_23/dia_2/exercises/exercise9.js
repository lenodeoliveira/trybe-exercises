db.superheroes
  .find({ "aspects.hairColor": { $in: ["black", "No Hair"] } })
  .pretty();
