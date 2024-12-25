/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const idx = Math.abs(nums[i]) - 1;
    nums[idx] = -Math.abs(nums[idx]);
  }

  const res = [];
  nums.forEach((num, i) => num > 0 && res.push(i + 1));
  return res;
};
