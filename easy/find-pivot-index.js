// Same as Find the Middle Index in Array problem in the Leetcode

function pivotIndex(nums) {
  let sum = 0;
  const n = nums.length;
  const prefixSums = [];

  for (const num of nums) {
    sum += num;
    prefixSums.push(sum);
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      if (rightSum(1, n - 1) === 0) return 0;
    } else if (i === n - 1) {
      if (leftSum(i - 1) === 0) return n - 1;
    } else if (leftSum(i - 1) === rightSum(i + 1, n - 1)) return i;
  }

  function rightSum(start, end) {
    return prefixSums[end] - prefixSums[start - 1];
  }

  function leftSum(i) {
    return prefixSums[i];
  }

  return -1;
}
