function minSubArrayLen(target, nums) {
  let i = 0;
  let sum = 0;
  let len = 0;
  const n = nums.length;

  // Create a window where sum is greater than or equal to target
  while (i < n) {
    sum += nums[i];
    if (sum >= target) break;
    i++;
  }

  if (i === n) return 0;

  let start = 0;
  let end = i;

  // Slide the window to find minimum length
  while (end < n && start <= end) {
    if (sum >= target) {
      const currLen = end - start + 1;
      if (len === 0) len = currLen;
      else len = Math.min(len, currLen);
    }

    if (sum >= target) {
      sum -= nums[start++];
    } else sum += nums[++end];
  }

  return len;
}
