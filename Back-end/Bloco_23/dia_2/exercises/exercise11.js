db.superheroes.countDocuments({
  "aspects.hairColor": { $nin: ["black", "No Hair"] },
});
