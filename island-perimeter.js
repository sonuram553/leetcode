function islandPerimeter(grid) {
  let perimeter = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === 0) continue;

      // Top
      if (row === 0) perimeter++;
      else if (grid[row - 1][col] === 0) perimeter++;

      // Bottom
      if (row === grid.length - 1) perimeter++;
      else if (grid[row + 1][col] === 0) perimeter++;

      // Left
      if (col === 0) perimeter++;
      else if (grid[row][col - 1] === 0) perimeter++;

      // Right
      if (col === grid[row].length - 1) perimeter++;
      else if (grid[row][col + 1] === 0) perimeter++;
    }
  }

  return perimeter;
}
