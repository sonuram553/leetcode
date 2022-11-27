function reverseOnlyLetters(s) {
  let start = 0;
  let end = s.length - 1;
  const chars = s.split("");

  while (start < end) {
    if (isAlphabet(chars[start]) && isAlphabet(chars[end])) {
      swap(chars, start, end);
      start++;
      end--;
    } else {
      if (!isAlphabet(chars[start])) start++;
      if (!isAlphabet(chars[end])) end--;
    }
  }

  return chars.join("");
}

function isAlphabet(ch) {
  const code = ch.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function swap(arr, leftIndex, rightIndex) {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}
