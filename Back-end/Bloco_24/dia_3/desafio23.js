db.movies.find({ $text: { $search: '"when he is accidentally"' } }).pretty();
