function filterByComments(arr, text) {
  return arr
    .map((user) =>
      user.comments.filter((comment) =>
        comment.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      )
    )
    .filter((arr) => arr.length > 0)
    .flat();
}

module.exports = { filterByComments };
