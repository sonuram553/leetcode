function reverseStr(s, k) {
  const n = s.length;
  const arr = s.split("");

  let i = 0;
  let j;

  do {
    if (n - i <= k) {
      // If left items are less than or equal to k
      j = n - 1;
      reverseArray(arr, i, j);
      break;
    } else j = i + k - 1;

    reverseArray(arr, i, j);

    i += 2 * k;
  } while (i < n);

  return arr.join("");
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
