// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr, result = 1) {
  if (arr.length === 0) return result;

  return productOfArray(arr.slice(1), arr[0] * result);
}

console.log(productOfArray([1, 2, 3, 10]));
