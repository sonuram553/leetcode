/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const n = nums.length;

  if (target <= nums[0]) return 0;
  if (target > nums[n - 1]) return n;
  if (target === nums[n - 1]) return n - 1;

  let l = 0;
  let r = n - 1;

  while (l <= r) {
    const mid = (l + r) >>> 1;
    const midVal = nums[mid];

    if (midVal === target) return mid;

    if (target > midVal) l = mid + 1;
    else r = mid - 1;
  }

  return l;
};
