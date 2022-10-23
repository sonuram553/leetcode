const searchInsert = function (nums, target) {
  const size = nums.length;
  if (target < nums[0]) return 0;
  if (target > nums[size - 1]) return size;

  let start = 0;
  let end = size - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;

    if (target > nums[mid]) {
      if (target < nums[mid + 1]) return mid + 1;
      else start = mid + 1;
    } else {
      if (target > nums[mid - 1]) return mid;
      else end = mid - 1;
    }
  }
};

const nums = [1, 3, 5, 6];
const target = 2;

console.log(searchInsert(nums, target));
