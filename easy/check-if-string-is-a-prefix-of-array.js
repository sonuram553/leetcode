function isPrefixString(str, words) {
  let i = 0;
  let len = 0;

  for (const word of words) {
    len += word.length;
    if (len > str.length) return false;

    for (const ch of word) {
      if (str[i] !== ch) return false;
      i++;
      if (i === str.length) return true;
    }
  }

  return false;
}
