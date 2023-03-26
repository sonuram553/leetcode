function largestLocal(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const result = [];

  for (let r = 0; r + 2 < rows; r++) {
    result.push([]);

    for (let c = 0; c + 2 < cols; c++) {
      result[r].push(findLargest(grid, r, c));
    }
  }

  return result;
}

function findLargest(grid, row, col) {
  let max = 0;

  for (let r = row; r <= row + 2; r++) {
    for (let c = col; c <= col + 2; c++) {
      if (grid[r][c] > max) max = grid[r][c];
    }
  }

  return max;
}
