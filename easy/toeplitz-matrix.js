function isToeplitzMatrix(matrix) {
  const row = matrix.length;
  const col = matrix[0].length;

  for (let r = 1; r < row; r++) {
    for (let c = 1; c < col; c++) {
      if (matrix[r][c] !== matrix[r - 1][c - 1]) return false;
    }
  }

  return true;
}
