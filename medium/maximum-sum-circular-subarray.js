/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  const n = nums.length;
  let currMin = 0;
  let currMax = 0;
  let globalMin = nums[0];
  let globalMax = nums[0];
  let total = 0;

  for (const num of nums) {
    currMin = Math.min(currMin + num, num);
    currMax = Math.max(currMax + num, num);
    total += num;
    globalMin = Math.min(globalMin, currMin);
    globalMax = Math.max(globalMax, currMax);
  }

  return globalMax > 0 ? Math.max(globalMax, total - globalMin) : globalMax;
};
