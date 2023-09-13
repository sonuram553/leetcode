// Runtime Complexity O(nlogn)
function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  let len = 1;
  let maxLen = 1;

  nums.sort((a, b) => a - b);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      // Do nothing
    } else if (nums[i] - nums[i - 1] === 1) len++;
    else {
      maxLen = Math.max(maxLen, len);
      len = 1;
    }
  }

  return Math.max(maxLen, len);
}

// Runtime Complexity O(n)
// Space Complexity O(n)
function longestConsecutive(nums) {
  let max = 0;
  const set = new Set(nums);

  for (const num of nums) {
    if (!set.has(num - 1)) {
      let count = 1;
      while (set.has(num + count)) {
        count++;
      }
      max = Math.max(max, count);
    }
  }

  return max;
}
