function freqAlphabets(s) {
  let i = 0;
  let str = "";
  const n = s.length;

  while (i < n) {
    if (i + 2 < n && s[i + 2] === "#") {
      str += String.fromCharCode(96 + Number(s[i] + s[i + 1]));
      i += 3;
    } else {
      str += String.fromCharCode(96 + Number(s[i]));
      i++;
    }
  }

  return str;
}
