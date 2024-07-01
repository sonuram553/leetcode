// https://www.youtube.com/watch?v=aayNRwUN3Do

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j]) {
      [nums[j], nums[i]] = [nums[i], nums[j]];
      i++;
    }
  }
};
