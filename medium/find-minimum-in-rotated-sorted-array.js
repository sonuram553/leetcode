/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  const n = nums.length;
  if (nums[0] < nums[n - 1]) return nums[0];

  let l = 0;
  let r = n - 1;

  while (l <= r) {
    const mid = (l + r) >> 1;

    if (mid > 0 && nums[mid - 1] > nums[mid]) return nums[mid];
    if (mid < n - 1 && nums[mid + 1] < nums[mid]) return nums[mid + 1];

    if (nums[0] < nums[mid]) l = mid + 1;
    else r = mid - 1;
  }

  return nums[0];
};
