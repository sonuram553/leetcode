// Run Time Complexity - O(m * n)
// Space Complexity - O(m + n)
function setZeroes(matrix) {
  const rowsLen = matrix.length;
  const colsLen = matrix[0].length;

  // Track rows and cols which will have zeroes only
  const rows = new Array(rowsLen).fill(1);
  const cols = new Array(colsLen).fill(1);

  for (let r = 0; r < rowsLen; r++) {
    for (let c = 0; c < colsLen; c++) {
      if (matrix[r][c] === 0) {
        rows[r] = 0;
        cols[c] = 0;
      }
    }
  }

  for (let r = 0; r < rowsLen; r++) {
    if (rows[r] === 0) {
      for (let c = 0; c < colsLen; c++) matrix[r][c] = 0;
    }
  }

  for (let c = 0; c < colsLen; c++) {
    if (cols[c] === 0) {
      for (let r = 0; r < rowsLen; r++) matrix[r][c] = 0;
    }
  }
}

// Run Time Complexity - O(m * n)
// Space Complexity - O(1)
function setZeroes(matrix) {
  const rowsLen = matrix.length;
  const colsLen = matrix[0].length;
  let rowZero = false;

  for (let r = 0; r < rowsLen; r++) {
    for (let c = 0; c < colsLen; c++) {
      if (matrix[r][c] === 0) {
        matrix[0][c] = 0;
        if (r > 0) matrix[r][0] = 0;
        else rowZero = true;
      }
    }
  }

  for (let r = 1; r < rowsLen; r++) {
    for (let c = 1; c < colsLen; c++) {
      if (matrix[0][c] === 0 || matrix[r][0] === 0) matrix[r][c] = 0;
    }
  }

  if (matrix[0][0] === 0) {
    for (let r = 0; r < rowsLen; r++) matrix[r][0] = 0;
  }

  if (rowZero) {
    for (let c = 0; c < colsLen; c++) matrix[0][c] = 0;
  }
}
