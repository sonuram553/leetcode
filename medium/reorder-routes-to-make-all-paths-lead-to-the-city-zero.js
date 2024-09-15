// https://www.youtube.com/watch?v=m17yOR5_PpI

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  const edges = new Set();
  for (const [a, b] of connections) {
    edges.add(`${a},${b}`);
  }

  const neighbors = {};
  for (let i = 0; i < n; i++) {
    neighbors[i] = [];
  }
  for (const [a, b] of connections) {
    neighbors[a].push(b);
    neighbors[b].push(a);
  }

  let count = 0;
  const visited = new Set();

  function dfs(node) {
    visited.add(node);
    for (const neighbor of neighbors[node]) {
      if (!visited.has(neighbor)) {
        if (!edges.has(`${neighbor},${node}`)) count++;
        dfs(neighbor);
      }
    }
  }

  dfs(0);
  return count;
};
