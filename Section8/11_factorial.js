//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num, result = 1) {
  if (num <= 1) return result;

  return factorial(num - 1, result * num);
}

console.log(factorial(0));
