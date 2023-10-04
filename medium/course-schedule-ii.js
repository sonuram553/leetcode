/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  if (prerequisites.length === 0) {
    const result = new Array(numCourses);
    for (let i = 0; i < numCourses; i++) result[i] = i;
    return result;
  }

  const adj = {};
  for (let i = 0; i < numCourses; i++) {
    adj[i] = [];
  }
  for (const [course, pre] of prerequisites) {
    adj[course].push(pre);
  }

  const result = [];
  const visited = new Set(); // course has been added to the result
  const visiting = new Set(); // course not added to result, but added to cycle

  function dfs(course) {
    if (visited.has(course)) return true;
    if (visiting.has(course)) return false;

    visiting.add(course);
    for (const pre of adj[course]) {
      if (!dfs(pre)) return false;
    }

    visiting.delete(course);
    result.push(course);
    visited.add(course);
    return true;
  }

  // Check for loop in the graph. If there is a loop that means we can't complete all courses
  // And return []
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return [];
  }

  return result;
};
