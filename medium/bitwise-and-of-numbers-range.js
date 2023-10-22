/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function (left, right) {
  let rightShiftCount = 0;

  while (left && right) {
    if (left === right) {
      return left << rightShiftCount;
    }

    left = left >> 1;
    right = right >> 1;
    rightShiftCount++;
  }

  return 0;
};
