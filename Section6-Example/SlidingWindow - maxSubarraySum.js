function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  const result = arr.reduce((prev, curr, i, arr) => {
    const total = add(arr.slice(i, i + num));
    if (total > prev) return total;
    return prev;
  }, 0);

  return result;
}

function add(arr) {
  return arr.reduce((prev, curr) => prev + curr, 0);
}

maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
