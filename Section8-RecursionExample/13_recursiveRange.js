// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(num, result = 0) {
  if (num === 0) return result;

  return recursiveRange(num - 1, num + result);
}

console.log(recursiveRange(10));

// n * n + 1 / 2 로도 쉽게 합을 구할 수 있다!
