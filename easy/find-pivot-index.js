/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let total = 0;
  const n = nums.length;

  for (let i = 0; i < n; i++) total += nums[i];

  let leftSum = 0;
  for (let i = 0; i < n; i++) {
    const rightSum = total - nums[i] - leftSum;
    if (leftSum === rightSum) return i;

    leftSum += nums[i];
  }

  return -1;
};
