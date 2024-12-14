/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;

  while (n) {
    if (n % 2) count++;
    n = n >>> 1;
  }

  return count;
};

// Bit manipulation
var hammingWeight = function (n) {
  let count = 0;

  while (n) {
    n = n & (n - 1);
    count++;
  }

  return count;
};
