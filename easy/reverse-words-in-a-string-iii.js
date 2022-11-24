function reverseWords(s) {
  const n = s.length;
  const arr = s.split("");
  let start = 0;

  for (let i = 1; i < n; i++) {
    if (s[i] === " ") {
      reverseArray(arr, start, i - 1);
      start = i + 1;
    } else if (i === n - 1) reverseArray(arr, start, i);
  }

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
