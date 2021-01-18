function kmpTable(pat) {
  let len = 0; // length of the longest prefix suffix;
  let i = 1;
  const Pi = [0];

  while (i < pat.length) {
    if (pat[i] === pat[len]) Pi[i++] = ++len;
    else if (len === 0) Pi[i++] = 0;
    else len = Pi[len - 1];
  }

  return Pi;
}

function kmpSearch(text, pat) {
  const textLength = text.length;
  const patLength = pat.length;

  if (patLength > textLength || !text || !pat) return null;

  const Pi = kmpTable(pat);

  let i = 0;
  let j = 0;
  let matches = [];

  while (i < textLength) {
    if (j < patLength && text[i] === pat[j]) {
      if (j === patLength - 1) matches.push(i - j);
      i++;
      j++;
    } else if (j === 0) i++;
    else j = Pi[j - 1];
  }

  return matches;
}

module.exports = kmpSearch;