db.restaurants.find({ rating: { $lt: 4 } }).count();
