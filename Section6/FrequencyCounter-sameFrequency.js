알function sameFrequency(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const obj = {};

  for (const val of String(first)) {
    obj[val] = (obj[val] || 0) + 1;
  }

  for (const val of String(second)) {
    if (!obj[val]) {
      return false;
    }
    obj[val]--;
  }

  return true;
}
console.log(sameFrequency(34, 14));
