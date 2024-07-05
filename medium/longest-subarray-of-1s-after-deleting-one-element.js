/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let start = 0;
  let max = 0;
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i++) {
    zeroCount += nums[i] ? 0 : 1;

    while (zeroCount > 1) {
      zeroCount -= nums[start] ? 0 : 1;
      start++;
    }

    max = Math.max(max, i - start);
  }

  return max;
};
