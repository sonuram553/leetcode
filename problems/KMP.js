const LPS = function (pattern) {
  const arr = [0];
  let i = 0;
  let j = 1;

  while (j < pattern.length) {
    if (pattern[i] === pattern[j]) {
      arr[j] = i + 1;
      i += 1;
      j += 1;
    } else if (i === 0) {
      arr[j] = 0;
      j += 1;
    } else i = arr[i - 1];
  }

  return arr;
};

const KMP = function (text, pattern) {
  let i = 0;
  let j = 0;
  const lps = LPS(pattern);

  while (i < text.length) {
    if (text[i] === pattern[j]) {
      i += 1;
      j += 1;
    }

    if (j === pattern.length) {
      console.log("Pattern found at:", i - j);
      j = lps[j - 1];
    } else if (i < text.length && pattern[j] !== text[i]) {
      if (j === 0) i += 1;
      else j = lps[j - 1];
    }
  }
};

const pattern = "AB";
const text = "AAAB";
console.log(LPS(pattern));
KMP(text, pattern);
