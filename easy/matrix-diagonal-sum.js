function diagonalSum(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  let sum = 0;

  for (let r = 0; r < rows; r++) {
    sum += mat[r][r];
  }

  for (let r = 0, c = cols - 1; r < rows; r++, c--) {
    sum += mat[r][c];
  }

  if (rows & 1) {
    // Odd rows
    const mid = rows >>> 1;
    sum -= mat[mid][mid];
  }

  return sum;
}
