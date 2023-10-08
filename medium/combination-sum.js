/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  function dfs(j, sum, curr) {
    for (let i = j; i < candidates.length; i++) {
      if (sum + candidates[i] === target) {
        result.push([...curr, candidates[i]]);
      } else if (sum + candidates[i] < target) {
        sum += candidates[i];
        curr.push(candidates[i]);
        dfs(i, sum, curr);
        sum -= candidates[i];
        curr.pop();
      }
    }
  }

  dfs(0, 0, []);
  return result;
};
