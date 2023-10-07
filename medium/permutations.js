/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const visited = new Set();
  const result = [];

  function dfs(curr) {
    if (curr.length === nums.length) {
      result.push([...curr]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (!visited.has(num)) {
        curr.push(num);
        visited.add(num);
        dfs(curr);
        curr.pop();
        visited.delete(num);
      }
    }
  }

  dfs([]);
  return result;
};
