db.superheroes.countDocuments({ "aspects.height": { $not: { $gt: 180 } } });
