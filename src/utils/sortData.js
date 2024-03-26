

export function sortData({
  data,
  tableData,
  sortKey,
  sortOrder,
  totalPosts,
  prevSearch,
  searchBy
}











) {
  const initialSearchKey = searchBy.value;

  if (tableData.length === 0) tableData = data;

  if (sortKey.value === undefined) return tableData;

  totalPosts.value = data.length;
  if(prevSearch.value) {
    prevSearch.value = false;
    tableData = data;
    sortKey.value = initialSearchKey;
    sortOrder.value = 'asc';
  }
  const sortedData = tableData.sort((a, b) => {
    return a[sortKey.value] > b[sortKey.value] ? 1 : -1;
  });

  if (sortOrder.value === 'dsc') {
    return sortedData.reverse();
  }

  return sortedData;
}
