// Find Minimum in Rotated Sorted Array

function findMin(nums) {
  const n = nums.length;
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (mid < n && nums[mid] > nums[mid + 1]) return nums[mid + 1];
    if (mid > 0 && nums[mid - 1] > nums[mid]) return nums[mid];

    // All the elements to the left of inflection point > first element of the array.
    // All the elements to the right of inflection point < first element of the array.
    if (nums[0] < nums[mid]) start = mid + 1;
    else end = mid - 1;
  }

  return nums[0];
}
