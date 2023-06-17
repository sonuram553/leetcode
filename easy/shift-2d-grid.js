function shiftGrid(grid, k) {
  const rows = grid.length;
  const cols = grid[0].length;
  const oneDArr = new Array(rows * cols);

  // Convert 2D Array to 1D Array
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      oneDArr[cols * row + col] = grid[row][col];
    }
  }

  rightShift(oneDArr, k);

  // Convert 1D Array to 2D Array
  let row = 0;
  grid[0][0] = oneDArr[0];

  for (let i = 1; i < oneDArr.length; i++) {
    if (i % cols === 0) row++;
    grid[row][i % cols] = oneDArr[i];
  }

  return grid;
}

function rightShift(arr, k) {
  const n = arr.length;

  k = k % n;
  if (k === 0) return;

  reverse(arr);
  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
}

function reverse(arr, start = 0, end = arr.length - 1) {
  while (start < end) {
    const left = arr[start];
    arr[start] = arr[end];
    arr[end] = left;

    start++;
    end--;
  }
}
