function replaceDigits(s) {
  let result = "";
  const n = s.length;

  for (let i = 1; i < n; i += 2) {
    result += s[i - 1] + shift(s[i - 1], Number(s[i]));
  }

  return n & 1 ? result + s[n - 1] : result;
}

function shift(ch, index) {
  return String.fromCharCode(ch.charCodeAt(0) + index);
}
