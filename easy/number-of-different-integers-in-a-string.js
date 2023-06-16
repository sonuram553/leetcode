function numDifferentIntegers(word) {
  let i = 0;
  const n = word.length;
  const set = new Set();

  while (i < n) {
    const ch = word[i];

    if (isNum(ch)) {
      let intStr = ch;
      i++;

      while (i < n && isNum(word[i])) {
        intStr += word[i];
        i++;
      }

      set.add(BigInt(intStr));
    }

    i++;
  }

  return set.size;
}

function isNum(ch) {
  const code = ch.charCodeAt(0);
  return code >= 48 && code <= 57;
}
