// https://www.youtube.com/watch?v=IlEsdxuD4lY

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let row = Array(n).fill(1);

  for (let i = 0; i < m - 1; i++) {
    const newRow = Array(n).fill(1);
    for (let i = n - 2; i >= 0; i--) {
      newRow[i] = newRow[i + 1] + row[i];
    }
    row = newRow;
  }

  return row[0];
};
