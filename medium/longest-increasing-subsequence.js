/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const n = nums.length;
  const lis = new Array(n).fill(1);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] < nums[j]) {
        lis[i] = Math.max(lis[i], 1 + lis[j]);
      }
    }
  }

  return Math.max(...lis);
};
