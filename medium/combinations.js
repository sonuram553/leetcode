/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];

  function dfs(i, curr) {
    if (curr.length == k) {
      result.push([...curr]);
      return;
    }

    for (let j = i; j <= n; j++) {
      curr.push(j);
      dfs(j + 1, curr);
      curr.pop();
    }
  }

  dfs(1, []);
  return result;
};
