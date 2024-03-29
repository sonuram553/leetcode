// Using Prefix Sum

function checkSubarraySum(nums, k) {
  let sum = 0;
  const map = { 0: 0 };

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (!(sum % k in map)) map[sum % k] = i + 1;
    else if (map[sum % k] < i) return true;
  }

  return false;
}
