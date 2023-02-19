function oddCells(m, n, indices) {
  const matrix = [];

  // Initialize matrix with zeroes
  for (let i = 0; i < m; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) matrix[i].push(0);
  }

  for (const index of indices) {
    incrementRow(matrix, index[0]);
    incrementCol(matrix, index[1]);
  }

  let oddCount = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) oddCount += matrix[i][j] & 1;
  }

  return oddCount;
}

function incrementRow(matrix, row) {
  for (let i = 0; i < matrix[0].length; i++) matrix[row][i]++;
}

function incrementCol(matrix, col) {
  for (let i = 0; i < matrix.length; i++) matrix[i][col]++;
}
