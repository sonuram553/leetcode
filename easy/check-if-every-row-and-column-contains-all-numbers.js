function checkValid(matrix) {
  const n = matrix.length;

  // Check Rows
  for (let row = 0; row < n; row++) {
    const set = new Set();
    for (let col = 0; col < n; col++) {
      set.add(matrix[row][col]);
    }
    if (set.size !== n) return false;
  }

  // Check Columns
  for (let col = 0; col < n; col++) {
    const set = new Set();
    for (let row = 0; row < n; row++) {
      set.add(matrix[row][col]);
    }
    if (set.size !== n) return false;
  }

  return true;
}
