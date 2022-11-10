function reversePrefix(word, ch) {
  const i = word.indexOf(ch);
  
  if (i === 0 || i === word.length) return word;

  return reverseArray(word.split(""), 0, i).join("");
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
