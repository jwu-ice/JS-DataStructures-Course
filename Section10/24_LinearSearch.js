// 선형탐색
function linearSearch(arr, findThis) {
  return arr.findIndex((v) => v === findThis);
}

console.log(linearSearch([10, 15, 20, 25, 30], 15));
