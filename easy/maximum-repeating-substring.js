function maxRepeating(sequence, word) {
  let indices;
  const m = word.length;
  const n = sequence.length;

  let i = 1;
  while (i < m && word[i] === word[i - 1]) i++;

  if (i === m) {
    // All chars in word are equal
    i = 0;
    let j = 0;
    indices = [];
    for (let i = 0; i < n; i++) {
      if (sequence[i] === word[j]) {
        j++;
        if (j === m) {
          indices.push(i - j - 1);
          j = 0;
        }
      } else j = 0;
    }
  } else indices = isSubstring(sequence, word);

  if (indices.length === 0) return 0;

  let max = 1;
  let count = 1;

  for (let i = 0; i < indices.length - 1; i++) {
    if (indices[i] + word.length === indices[i + 1]) count++;
    else {
      max = Math.max(max, count);
      count = 1;
    }
  }

  return Math.max(max, count);
}

function isSubstring(text, pattern) {
  const n = text.length;
  const m = pattern.length;
  const lps = computeLPSArray(pattern);
  const indices = [];

  let i = 0;
  let j = 0;
  while (i < n) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    }

    if (j === m) {
      indices.push(i - j);
      j = lps[j - 1];
    }

    if (i < n && text[i] !== pattern[j]) {
      if (j === 0) i++;
      else j = lps[j - 1];
    }
  }

  return indices;
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
