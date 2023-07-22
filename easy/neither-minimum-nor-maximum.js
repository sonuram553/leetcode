function findNonMinOrMax(nums) {
  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
    else if (nums[i] > max) max = nums[i];
  }

  if (min === max) return -1;

  for (const num of nums) {
    if (num > min && num < max) return num;
  }

  return -1;
}
