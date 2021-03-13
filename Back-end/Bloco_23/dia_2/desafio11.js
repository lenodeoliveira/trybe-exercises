db.movies.update({}, { $set: { sequels: 0 } }, { multi: true });
/* OR */
db.movies.updateMany(
  {},
  {
    $set: {
      sequels: 0,
    },
  }
);
