// Largest Number At Least Twice of Others

function dominantIndex(nums) {
  let largest = Number.MIN_VALUE;
  let index;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
      index = i;
    }
  }

  for (const num of nums) {
    if (num !== largest && 2 * num > largest) return -1;
  }

  return index;
}
