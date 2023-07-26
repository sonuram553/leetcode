function findColumnWidth(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const result = new Array(n);

  for (let col = 0; col < n; col++) {
    let row = 1;
    let maxDigitCount = digitCount(grid[0][col]);

    while (row < m) {
      maxDigitCount = Math.max(maxDigitCount, digitCount(grid[row][col]));
      row++;
    }

    result[col] = maxDigitCount;
  }

  return result;
}

function digitCount(num) {
  if (num === 0) return 1;

  let count = 0;
  let temp = Math.abs(num);

  while (temp) {
    count++;
    temp = Math.floor(temp / 10);
  }

  return num < 0 ? count + 1 : count;
}
