quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const [pivot, ...rest] = arr;
  const big = rest.filter((item) => item >= pivot);
  const small = rest.filter((item) => item < pivot);
  return [...quickSort(small), pivot, ...quickSort(big)];
};
