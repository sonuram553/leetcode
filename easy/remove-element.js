/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = nums.length - 1;
  let j = i;

  while (i >= 0) {
    if (nums[i] === val) {
      nums[i] = nums[j];
      j--;
    }

    i--;
  }

  return j + 1;
};
