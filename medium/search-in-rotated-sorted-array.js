/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const n = nums.length;

  let l = 0;
  let r = n - 1;

  while (l <= r) {
    const mid = (l + r) >> 1;

    if (target === nums[mid]) return mid;

    // mid is in left sorted portion
    if (nums[l] <= nums[mid]) {
      if (target > nums[mid] || target < nums[l]) l = mid + 1;
      else r = mid - 1;
    }

    // mid is in right sorted portion
    else {
      if (target < nums[mid] || target > nums[r]) r = mid - 1;
      else l = mid + 1;
    }
  }

  return -1;
};

