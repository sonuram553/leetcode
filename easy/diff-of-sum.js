function differenceOfSum(nums) {
  const elemSum = nums.reduce((sum, num) => sum + num);
  let digitSum = 0;

  for (const num of nums) {
    digitSum += findDigitsSum(num);
  }

  return Math.abs(elemSum - digitSum);
}

function findDigitsSum(num) {
  let sum = 0;

  while (num) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }

  return sum;
}
