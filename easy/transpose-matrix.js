function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  if (rows === cols) {
    for (let row = 0; row < rows; row++) {
      for (let col = row + 1; col < cols; col++) {
        const left = matrix[row][col];
        matrix[row][col] = matrix[col][row];
        matrix[col][row] = left;
      }
    }

    return matrix;
  } else {
    const transpose = new Array(cols);

    // Setup Transpose matrix
    for (let row = 0; row < cols; row++) {
      transpose[row] = new Array(rows);
      for (let col = 0; col < rows; col++) {
        transpose[row][col] = 0;
      }
    }

    // Actual Transpose
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        transpose[col][row] = matrix[row][col];
      }
    }

    return transpose;
  }
}
