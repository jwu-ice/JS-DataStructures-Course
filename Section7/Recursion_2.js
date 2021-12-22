// for문 팩토리얼 구현
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  console.log(total);
}

factorial(4);

// 꼬리재귀 방식!
function factorial(num, result = 1) {
  if (num <= 1) return result;

  return factorial(num - 1, num * result);
}

console.log(factorial(4));
