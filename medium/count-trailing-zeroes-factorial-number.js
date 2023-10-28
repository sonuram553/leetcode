/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let count = 0;
  let divideBy = 5;

  while (n >= divideBy) {
    count += Math.floor(n / divideBy);
    divideBy *= 5;
  }

  return count;
};
