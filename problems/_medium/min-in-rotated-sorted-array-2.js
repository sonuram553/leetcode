// Find Minimum in Rotated Sorted Array which contains duplicate elements

// We can't use Binary Search in case of array contains duplicates
// [10, 0, 10, 10]

function findMin(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) return nums[i + 1];
  }

  return nums[0];
}
