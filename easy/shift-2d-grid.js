/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;

  if (k % (rows * cols) === 0) return grid;

  k %= rows * cols;

  // Create a new 2D array to store the result
  const result = Array(rows);
  for (let i = 0; i < rows; i++) {
    result[i] = Array(cols);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const newC = (c + k) % cols;
      const rowOffset = Math.floor((c + k) / cols);
      const newR = (r + rowOffset) % rows;
      result[newR][newC] = grid[r][c];
    }
  }

  return result;
};
