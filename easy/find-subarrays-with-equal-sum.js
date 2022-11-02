// Using Sliding Window Technique
// Time Complexity O(N)
// Space Complexity O(N)

function findSubarrays(nums) {
  let k = 2; // k represents window size;
  let sum = 0;
  const set = new Set();

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  set.add(sum);

  for (let i = 1; i <= nums.length - k; i++) {
    sum -= nums[i - 1];
    sum += nums[i + k - 1];

    if (set.has(sum)) return true;
    set.add(sum);
  }

  return false;
}
