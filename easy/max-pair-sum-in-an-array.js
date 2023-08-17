function maxSum(nums) {
  const map = {};

  for (const num of nums) {
    const digit = findMaxDigit(num);
    if (digit in map) map[digit].push(num);
    else map[digit] = [num];
  }

  let maxPairSum = -1;

  for (const digit in map) {
    const nums = map[digit];

    if (nums.length > 1) {
      let max = nums[0] > nums[1] ? nums[0] : nums[1];
      let secMax = nums[0] < nums[1] ? nums[0] : nums[1];

      for (let i = 2; i < nums.length; i++) {
        if (nums[i] > max) {
          secMax = max;
          max = nums[i];
        } else if (nums[i] > secMax) secMax = nums[i];
      }

      maxPairSum = Math.max(maxPairSum, max + secMax);
    }
  }

  return maxPairSum;
}

function findMaxDigit(num) {
  let max = null;

  while (num) {
    let digit = num % 10;
    max = max ? Math.max(max, digit) : digit;
    num = Math.floor(num / 10);
  }

  return max;
}

export default maxSum;
