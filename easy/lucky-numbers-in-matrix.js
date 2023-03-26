function luckyNumbers(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const rowsMin = [];

  for (let r = 0; r < rows; r++) {
    let min = matrix[r][0],
      index = 0;

    for (let c = 1; c < cols; c++) {
      const num = matrix[r][c];

      if (num < min) {
        min = num;
        index = c;
      }
    }

    rowsMin.push([index, min]);
  }

  const colsMax = {};

  for (let c = 0; c < cols; c++) {
    let max = matrix[0][c];

    for (let r = 1; r < rows; r++) {
      max = Math.max(matrix[r][c], max);
    }

    colsMax[c] = max;
  }

  const result = [];

  for (const [index, min] of rowsMin) {
    if (colsMax[index] === min) result.push(min);
  }

  return result;
}
