function checkXMatrix(grid) {
  const n = grid.length;

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const num = grid[r][c];
      if (r === c || r + c + 1 === n) {
        if (num === 0) return false;
      } else if (num !== 0) return false;
    }
  }

  return true;
}
