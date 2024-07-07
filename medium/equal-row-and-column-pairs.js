/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  const n = grid.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let c = 0; c < n; c++) {
      let allEqual = true;
      for (let r = 0; r < n; r++) {
        if (grid[r][c] !== grid[i][r]) {
          allEqual = false;
          break;
        }
      }
      if (allEqual) count++;
    }
  }

  return count;
};
