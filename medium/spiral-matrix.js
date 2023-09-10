function spiralOrder(matrix) {
  let rowStart = 0;
  let rowEnd = matrix.length - 1;
  let colStart = 0;
  let colEnd = matrix[0].length - 1;
  const result = [];

  while (true) {
    // Process top row
    let r = rowStart;
    let c = colStart;
    while (c <= colEnd) {
      result.push(matrix[r][c]);
      c++;
    }
    rowStart++;
    if (rowStart > rowEnd) break;

    // Process right column
    r = rowStart;
    c = colEnd;
    while (r <= rowEnd) {
      result.push(matrix[r][c]);
      r++;
    }
    colEnd--;
    if (colStart > colEnd) break;

    // Process bottom row
    r = rowEnd;
    c = colEnd;
    while (c >= colStart) {
      result.push(matrix[r][c]);
      c--;
    }
    rowEnd--;
    if (rowStart > rowEnd) break;

    // Process left column
    r = rowEnd;
    c = colStart;
    while (r >= rowStart) {
      result.push(matrix[r][c]);
      r--;
    }
    colStart++;
    if (colStart > colEnd) break;
  }

  return result;
}
