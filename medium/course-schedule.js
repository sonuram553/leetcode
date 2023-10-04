/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const adj = {};
  const visited = new Set();

  // Crate adjacency matrix
  for (const [course, pre] of prerequisites) {
    adj[course] = adj[course] || [];
    adj[pre] = adj[pre] || [];
    adj[course].push(pre);
  }

  function dfs(course) {
    if (visited.has(course)) return false;
    if (adj[course].length === 0) return true;

    visited.add(course);
    for (const crs of adj[course]) {
      if (!dfs(crs)) return false;
    }
    visited.delete(course);
    adj[course] = [];
    return true;
  }

  for (const [course, pre] of prerequisites) {
    if (!dfs(course)) return false;
  }

  return true;
};
