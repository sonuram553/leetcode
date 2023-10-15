/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const n = nums.length;
  let l = 0;
  let r = n - 1;
  let firstIndex = -1;
  let lastIndex = -1;

  // find first index
  while (l <= r) {
    const mid = (l + r) >> 1;

    if (target === nums[mid]) {
      if (mid === 0 || nums[mid - 1] !== target) {
        firstIndex = mid;
        break;
      }
      r = mid - 1;
    } else if (target < nums[mid]) r = mid - 1;
    else l = mid + 1;
  }

  // find last index
  l = 0;
  r = n - 1;
  while (l <= r) {
    const mid = (l + r) >> 1;

    if (target === nums[mid]) {
      if (mid === n - 1 || nums[mid + 1] !== target) {
        lastIndex = mid;
        break;
      }
      l = mid + 1;
    } else if (target < nums[mid]) r = mid - 1;
    else l = mid + 1;
  }

  return [firstIndex, lastIndex];
};
