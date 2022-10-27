// Using Sliding Window Technique
// Time Complexity O(N)

function findMaxAverage(nums, k) {
  let windowSum = nums.slice(0, k).reduce((acc, num) => acc + num);
  let maxSum = windowSum;

  for (let i = 0; i < nums.length - k; i++) {
    windowSum = windowSum - nums[i] + nums[i + k];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum / k;
}
