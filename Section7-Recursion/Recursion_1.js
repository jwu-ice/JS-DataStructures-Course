function countDown(num) {
  if (num <= 0) {
    console.log("Boom!!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);
