/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let start = 0;
  let end = rows * cols - 1;

  while (start <= end) {
    const mid = (start + end) >> 1;
    const r = Math.floor(mid / cols);
    const c = mid % cols;

    if (matrix[r][c] === target) return true;

    if (matrix[r][c] < target) start = mid + 1;
    else end = mid - 1;
  }

  return false;
};
