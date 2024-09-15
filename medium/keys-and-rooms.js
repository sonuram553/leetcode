/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set();

  function dfs(index = 0) {
    if (visited.has(index)) return;

    visited.add(index);

    for (const i of rooms[index]) {
      dfs(i);
    }
  }

  dfs();
  return visited.size === rooms.length;
};
