function flipAndInvertImage(image) {
  for (const row of image) {
    reverseArray(row);

    for (let i = 0; i < row.length; i++) {
      row[i] = row[i] ^ 1;
    }
  }

  return image;
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
