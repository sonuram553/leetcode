function sortedSquares(nums) {
  const n = nums.length;
  let k = 0; // k will have the index of the first +ve number.

  while (k < n && nums[k] < 0) k++;

  if (k === 0) {
    // All numbers are positive.
    return nums.map((num) => num * num);
  } else if (k === n) {
    // All numbers are negative.
    return reverseArray(nums).map((num) => num * num);
  }

  nums = nums.map((num) => num * num);
  reverseArray(nums, 0, k - 1);
  return mergeSortedArrays(nums.slice(0, k), nums.slice(k));
}

function reverseArray(arr, start = 0, end = arr.length - 1) {
  while (start < end) {
    const left = arr[start];
    arr[start] = arr[end];
    arr[end] = left;

    start++;
    end--;
  }

  return arr;
}

function mergeSortedArrays(left, right) {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }

  while (i < left.length) result.push(left[i++]);
  while (j < right.length) result.push(right[j++]);

  return result;
}
