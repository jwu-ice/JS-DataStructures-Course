// function isSubsequence(first, second) {
//   let [i, j] = [0, 0];

//   while (j < second.length) {
//     if (second[j] === first[i]) {
//       i++;
//     }
//     if (i === first.length) {
//       return true;
//     }
//     j++;
//   }

//   return false;
// }

// console.log(isSubsequence("abc", "abracadabra"));

// 재귀
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str1[0] === str2[0]) return isSubsequence(str1.slice(1), str2);

  return isSubsequence(str1, str2.slice(1));
}
console.log(isSubsequence("abc", "abracadabra"));
