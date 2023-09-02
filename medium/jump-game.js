// Greedy Approach

function canJump(nums) {
  const n = nums.length;
  let i = n - 2;
  let goal = n - 1;

  while (i >= 0) {
    if (i + nums[i] >= goal) goal = i;
    i--;
  }

  return goal === 0;
}
