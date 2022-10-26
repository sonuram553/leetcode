// Using Prefix Sum

function subarraySum(nums, k) {
  let sum = 0;
  let count = 0;
  const map = { 0: 1 };

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum - k in map) count += map[sum - k];
    map[sum] = (map[sum] || 0) + 1;
  }

  return count;
}
