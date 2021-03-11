db.superheroes.find({ "aspects.eyeColor": { $eq: "green" } }).pretty();
