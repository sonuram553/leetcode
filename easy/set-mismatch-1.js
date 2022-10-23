// Using Map
// Time Complexity O(N)
// Space Complexity O(N)

function findErrorNums(nums) {
  const map = {};
  let duplicateNum;
  const n = nums.length;
  const actualSum = (n * (n + 1)) / 2;
  const sum = nums.reduce((acc, num) => acc + num);

  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
    if (map[num] === 2) {
      duplicateNum = num;
      break;
    }
  }

  const missingNum = actualSum + duplicateNum - sum;
  return [duplicateNum, missingNum];
}
