// Without using extra memory
// Time Complexity O(N)

function findErrorNums(nums) {
  let duplicateNum;
  const n = nums.length;
  const actualSum = (n * (n + 1)) / 2;
  const sum = nums.reduce((acc, num) => acc + num);

  for (const num of nums) {
    if (nums[Math.abs(num) - 1] < 0) {
      duplicateNum = Math.abs(num);
      break;
    } else nums[Math.abs(num) - 1] *= -1;
  }

  const missingNum = actualSum + duplicateNum - sum;
  return [duplicateNum, missingNum];
}
