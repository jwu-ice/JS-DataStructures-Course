function areThereDuplicates(...arr) {
  const result = arr.reduce((prev, curr) => {
    if (prev[curr]) {
      return false;
    }
    prev[curr] = 1;
    return prev;
  }, {});

  return result ? false : true;
}

console.log(areThereDuplicates(1, 2, 3));
