function getOffset(currentPage = 1, listPerPage) {
  return (currentPage - 1) * [listPerPage];
}
// au cas où rien n'est récupéré
function emptyOrRows(rows) {
  if (!rows) {
    return [];
  }
  return rows;
}

module.exports = {
  getOffset,
  emptyOrRows,
};
