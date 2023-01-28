function surfaceArea(grid) {
  const n = grid.length;
  let totalSurfaceArea = 0;

  if (n === 1) {
    return 2 + grid[0][0] * 4;
  }

  // Bottom Surface Area
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (grid[row][col]) totalSurfaceArea++;
    }
  }

  // Top Surface Area will be same as the bottom surface area
  totalSurfaceArea += totalSurfaceArea;

  // Other surface areas
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      const value = grid[row][col];
      if (row === 0 || row === n - 1) totalSurfaceArea += value;
      if (col === 0 || col === n - 1) totalSurfaceArea += value;

      if (row < n - 1) {
        totalSurfaceArea += Math.abs(value - grid[row + 1][col]);
      }

      if (col < n - 1) {
        totalSurfaceArea += Math.abs(value - grid[row][col + 1]);
      }
    }
  }

  return totalSurfaceArea;
}
