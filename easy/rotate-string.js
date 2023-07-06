// Using KMP
function rotateString(str, goal) {
  if (str.length !== goal.length) return false;
  return str === goal || isSubstring(str + str, goal);
}

function isSubstring(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const lps = computeLPSArray(pattern);

  let i = 0;
  let j = 0;
  while (i < n) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === m) return true;

    if (i < n && text[i] !== pattern[j]) {
      if (j === 0) i++;
      else j = lps[j - 1];
    }
  }

  return false;
}

function computeLPSArray(pattern) {
  let i = 1;
  let len = 0;
  const n = pattern.length;
  const lps = new Array(n).fill(0);

  while (i < n) {
    if (pattern[i] === pattern[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len === 0) i++;
      else len = lps[len - 1];
    }
  }

  return lps;
}

// Naive Approach
function rotateString(str, goal) {
  if (str.length !== goal.length) return false;
  if (str === goal) return true;

  for (let i = 1; i < str.length; i++) {
    const arr = str.split("");
    leftShift(arr, i);
    if (arr.join("") === goal) return true;
  }

  return false;
}

function leftShift(arr, k) {
  const n = arr.length;

  k = k % n;
  if (k === 0) return;

  reverse(arr, 0, k - 1);
  reverse(arr, k, n - 1);
  reverse(arr, 0, n - 1);
}

function reverse(arr, start, end) {
  while (start < end) {
    const left = arr[start];
    arr[start] = arr[end];
    arr[end] = left;

    start++;
    end--;
  }
}
