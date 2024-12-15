/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const n = nums.length;
  let l = 0;
  let r = n - 1;
  let i = n - 1;
  const res = Array(n);

  while (i >= 0) {
    if (Math.abs(nums[l]) > Math.abs(nums[r])) {
      res[i] = nums[l] * nums[l];
      l++;
    } else {
      res[i] = nums[r] * nums[r];
      r--;
    }

    i--;
  }

  return res;
};
