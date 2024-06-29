/**
 * Without division operation and using one extra array only
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length;

  // Calculate suffixes
  const suffix = Array(len).fill(0);
  suffix[len - 1] = nums[len - 1];
  for (let i = len - 2; i >= 0; i--) {
    suffix[i] = nums[i] * suffix[i + 1];
  }

  // Calculate prefixes
  for (let i = 1; i < len; i++) {
    nums[i] = nums[i] * nums[i - 1];
  }

  // Result can be stored in the suffix array
  for (let i = 0; i < len; i++) {
    const lefVal = i === 0 ? 1 : nums[i - 1];
    const rightVal = i === len - 1 ? 1 : suffix[i + 1];
    suffix[i] = lefVal * rightVal;
  }

  return suffix;
};
