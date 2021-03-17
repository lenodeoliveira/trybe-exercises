db.movies.find({ $text: { $search: "monstrous criminal" } }).pretty();
