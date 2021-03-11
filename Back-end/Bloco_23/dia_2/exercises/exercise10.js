db.superheroes.countDocuments({
  "aspects.hairColor": { $in: ["black", "No Hair"] },
});
