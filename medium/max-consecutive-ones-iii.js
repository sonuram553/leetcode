/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let l = 0;
  let r = 0;
  let count = 0;
  let maxCount = 0;
  let tempK = k;

  while (r < nums.length) {
    if (nums[r]) {
      r++;
      count++;
    } else if (tempK) {
      r++;
      count++;
      tempK--;
    } else {
      maxCount = Math.max(maxCount, count);

      while (nums[l]) {
        l++;
        count--;
      }
      l++;
      count--;
      tempK++;
    }
  }

  return Math.max(maxCount, count);
};
