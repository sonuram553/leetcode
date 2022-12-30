function deleteGreatestValue(grid) {
  const rows = grid.length;
  let cols = grid[0].length;
  let sum = 0;

  while (cols) {
    let max = Number.MIN_VALUE;

    for (let r = 0; r < rows; r++) {
      let maxCol = 0; // Storing index

      for (let c = 1; c < cols; c++) {
        if (grid[r][c] > grid[r][maxCol]) maxCol = c;
      }

      max = Math.max(max, grid[r][maxCol]);
      grid[r][maxCol] = grid[r][cols - 1];
    }

    cols--;
    sum += max;
  }

  return sum;
}
