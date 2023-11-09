/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  for (let r = rows - 1; r >= 0; r--) {
    for (let c = cols - 1; c >= 0; c--) {
      let rightValue = Infinity;
      let bottomValue = Infinity;

      if (c < cols - 1) rightValue = grid[r][c + 1];
      if (r === rows - 1 && c === cols - 1) bottomValue = 0;
      else if (r < rows - 1) bottomValue = grid[r + 1][c];

      grid[r][c] = grid[r][c] + Math.min(rightValue, bottomValue);
    }
  }

  return grid[0][0];
};
