db.superheroes.countDocuments({ "aspects.height": { $lte: 180 } });
