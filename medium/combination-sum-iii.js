/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const result = [];

  function dfs(index = 1, countK = 0, sum = 0, nums = []) {
    if (countK === k) {
      if (sum === n) result.push(nums);
      return;
    }

    for (let i = index; i <= 9; i++) {
      dfs(i + 1, countK + 1, sum + i, [...nums, i]);
      if (sum + i > n) break;
    }
  }

  dfs();
  return result;
};
