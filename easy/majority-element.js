// Runtime Complexity O(n)
// Space Complexity O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = {};
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    const num = nums[i];
    map[num] = (map[num] || 0) + 1;
    if (map[num] > n >>> 1) return num;
  }
};

// Using Boyer Moore's Algorithm
// Runtime Complexity O(n)
// Space Complexity O(1)
var majorityElement = function (nums) {
  const n = nums.length;
  let count = 0;
  let res = 0;

  for (let i = 0; i < n; i++) {
    if (count === 0) res = nums[i];
    count += nums[i] === res ? 1 : -1;
  }

  return res;
};
