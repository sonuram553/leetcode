// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const result = [];

  for (let row = 0; row < n; row++) {
    result[row] = [];
  }

  let count = 1,
    rowStart = 0,
    colStart = 0,
    rowEnd = n - 1,
    colEnd = n - 1;

  while (count <= n * n) {
    for (let i = colStart; i <= colEnd; i++) {
      result[rowStart][i] = count++;
    }
    rowStart++;

    for (let i = rowStart; i <= rowEnd; i++) {
      result[i][colEnd] = count++;
    }
    colEnd--;

    for (let i = colEnd; i >= colStart; i--) {
      result[rowEnd][i] = count++;
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowStart; i--) {
      result[i][colStart] = count++;
    }
    colStart++;
  }

  return result;
}

module.exports = matrix;
