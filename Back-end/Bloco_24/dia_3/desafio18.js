db.movies.find({ description: { $regex: /^The/i } });
