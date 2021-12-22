// 이진 탐색
function binarySearch(arr, findThis) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== findThis && start <= end) {
    findThis < arr[middle] ? (end = middle - 1) : (start = middle + 1);
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === findThis ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 31));
