function moveZeroes(nums) {
  const size = nums.length;
  let k = size - 1;

  while (nums[k] === 0 && k >= 0) {
    k--;
  }

  if (k === -1) return;

  for (let i = k - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      for (let j = i; j < k; j++) {
        const left = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = left;
      }
      k--;
    }
  }
}

const nums = [0, 0, 1, 2];
moveZeroes(nums);
console.log(nums);
