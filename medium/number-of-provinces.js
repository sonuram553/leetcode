// https://algo.monster/liteproblems/547

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const visited = new Set();
  const n = isConnected.length;

  function dfs(node) {
    visited.add(node);
    for (let adjacentNode = 0; adjacentNode < n; adjacentNode++) {
      if (!visited.has(adjacentNode) && isConnected[node][adjacentNode]) {
        dfs(adjacentNode);
      }
    }
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }

  return count;
};
