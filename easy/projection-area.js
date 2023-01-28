function projectionArea(grid) {
  let totalArea = 0;
  const n = grid.length;

  // From Top
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) if (grid[row][col]) totalArea++;
  }

  // Going Row wise
  for (let row = 0; row < n; row++) {
    let maxValue = grid[row][0];

    for (let col = 1; col < n; col++) {
      maxValue = Math.max(maxValue, grid[row][col]);
    }

    totalArea += maxValue;
  }

  // Going Column wise
  for (let col = 0; col < n; col++) {
    let maxValue = grid[0][col];

    for (let row = 1; row < n; row++) {
      maxValue = Math.max(maxValue, grid[row][col]);
    }

    totalArea += maxValue;
  }

  return totalArea;
}
