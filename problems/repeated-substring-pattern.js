function computeLps(str) {
  let i = 1;
  let len = 0;
  const lps = [0];

  while (i < str.length) {
    if (str[i] === str[len]) {
      len++;
      lps[i] = len;
      i++;
    } else if (len !== 0) {
      len = lps[len - 1];
    } else {
      lps[i] = 0;
      i++;
    }
  }

  return lps;
}

function repeatedSubstringPattern(str) {
  const lps = computeLps(str);
  const len = lps[lps.length - 1];
  const size = str.length;

  if (len > 0 && size % (size - len) === 0) return true;
  return false;
}
