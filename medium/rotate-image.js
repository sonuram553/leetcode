function rotate(matrix) {
  let left = 0;
  let right = matrix.length - 1;

  while (left < right) {
    let top = left;
    let bottom = right;

    for (let i = 0; i < right - left; i++) {
      const temp = matrix[top][left + i];

      matrix[top][left + i] = matrix[bottom - i][left];

      matrix[bottom - i][left] = matrix[bottom][right - i];

      matrix[bottom][right - i] = matrix[top + i][right];

      matrix[top + i][right] = temp;
    }

    left++;
    right--;
  }
}
