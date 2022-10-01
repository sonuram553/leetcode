// Maximum sum of i*arr[i] among all rotations of a given array

function maxRotateFunction(nums) {
  const n = nums.length;
  const sum = nums.reduce((acc, num) => acc + num);
  let curr_value = nums.reduce((acc, num, index) => acc + num * index, 0);
  let max = curr_value;

  for (let i = 1; i < n; i++) {
    const next_value = curr_value + nums[i - 1] * (n - 1) - (sum - nums[i - 1]);
    max = Math.max(max, next_value);
    curr_value = next_value;
  }

  return max;
}
