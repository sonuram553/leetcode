function allCellsDistOrder(rows, cols, rCenter, cCenter) {
  const result = [];

  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++) result.push([r, c]);

  function findPivot(arr, start, end, compareFn) {
    let pivotIndex = start;

    for (let i = start + 1; i <= end; i++) {
      if (compareFn(arr[start], arr[i])) {
        pivotIndex++;
        swap(arr, i, pivotIndex);
      }
    }

    swap(arr, start, pivotIndex);
    return pivotIndex;
  }

  function quickSort(
    arr,
    start = 0,
    end = arr.length - 1,
    compareFn = compareNums
  ) {
    if (start >= end) return;

    const pivot = findPivot(arr, start, end, compareFn);
    quickSort(arr, start, pivot - 1, compareFn);
    quickSort(arr, pivot + 1, end, compareFn);
  }

  function swap(arr, leftIndex, rightIndex) {
    const temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
  }

  function compareNums(left, right) {
    const { abs } = Math;

    return (
      abs(right[0] - rCenter) + abs(right[1] - cCenter) <
      abs(left[0] - rCenter) + abs(left[1] - cCenter)
    );
  }

  quickSort(result);

  return result;
}
