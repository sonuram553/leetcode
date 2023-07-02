function findOcurrences(text, first, second) {
  const result = [];
  const patternLen = `${first} ${second} `.length;
  const indices = substrings(text, `${first} ${second}`).filter((index) => {
    if (index === 0 || text[index - 1] === " ") return true;
    return false;
  });

  indices.forEach((index) => {
    let word = "";
    let i = index + patternLen;
    while (i < text.length && text[i] !== " ") {
      word += text[i];
      i++;
    }
    word && result.push(word);
  });

  return result;
}

// KMP Algorithm for Pattern Searching
function substrings(text, pattern) {
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
    } else if (i < n && text[i] !== pattern[j]) {
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
