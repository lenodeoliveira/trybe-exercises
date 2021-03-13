db.movies.updateMany({}, { $unset: { buget: "", estimatedBudget: "" } });
/*or*/
db.movies.update(
  {},
  { $unset: { budget: "", estimatedBudget: "" } },
  { multi: true }
);
