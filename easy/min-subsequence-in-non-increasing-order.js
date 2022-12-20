function minSubsequence(nums) {
  const sortedNums = countingSort(nums);
  const totalSum = nums.reduce((acc, num) => num + acc);

  let sum = 0;
  const result = [];

  for (let i = sortedNums.length - 1; i >= 0; i--) {
    sum += sortedNums[i];
    result.push(sortedNums[i]);
    if (sum > totalSum - sum) break;
  }

  return result;
}

function countingSort(nums) {
  const counter = [];
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  for (let i = 0; i <= max - min; i++) counter.push(0);

  for (const num of nums) counter[num - min] += 1;

  // Cumulative Sum
  for (let i = 1; i < counter.length; i++) counter[i] += counter[i - 1];

  const result = [];
  for (const num of nums) result[--counter[num - min]] = num;

  return result;
}
