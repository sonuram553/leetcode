function stringMatching(words) {
  const result = [];
  const n = words.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        if (isSubstring(words[j], words[i])) {
          result.push(words[i]);
          break;
        }
      }
    }
  }

  return result;
}

// Pattern Matching - Naive Approach
function isSubstringNaiveApproach(text, pattern) {
  if (pattern.length > text.length) return false;
  if (text === pattern) return true;

  const n = text.length;
  const m = pattern.length;

  for (let i = 0; i <= n - m; i++) {
    let found = true;
    for (let j = 0; j < m; j++) {
      if (pattern[j] !== text[i + j]) {
        found = false;
        break;
      }
    }
    if (found) return true;
  }

  return false;
}

// Pattern Matching - KMP
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
