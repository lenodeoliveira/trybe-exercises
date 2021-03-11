db.superheroes.countDocuments({ "aspects.hairColor": { $exists: true } });
