function reverseArray(arr, start, end) {
  while (start < end) {
    const left = arr[start];
    arr[start] = arr[end];
    arr[end] = left;

    start++;
    end--;
  }

  return arr;
}

function rotate(nums, k) {
  const n = nums.length;

  k = k % n;
  reverseArray(nums, 0, n - k - 1);
  reverseArray(nums, n - k, n - 1);
  reverseArray(nums, 0, n - 1);
}
