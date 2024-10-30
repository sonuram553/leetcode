/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const left = target - num;

    if (map[left] !== undefined) return [i, map[left]];

    map[num] = i;
  }
};
