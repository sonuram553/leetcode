/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const n = nums.length;
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    const mid = (start + end) >> 1;

    if (mid > 0 && nums[mid] < nums[mid - 1]) end = mid - 1;
    else if (mid < n - 1 && nums[mid] < nums[mid + 1]) start = mid + 1;
    else return mid;
  }
};
