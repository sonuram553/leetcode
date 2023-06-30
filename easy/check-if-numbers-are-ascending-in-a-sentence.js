function areNumbersAscending(s) {
  let i = 0;
  let prevNum = 0;
  const n = s.length;

  while (i < n) {
    let ch = s[i];

    if (isNum(ch)) {
      if (i < n - 1 && isNum(s[i + 1])) {
        i++;
        ch += s[i];
      }
      const num = Number(ch);
      if (num <= prevNum) return false;
      prevNum = num;
    }

    i++;
  }

  return true;
}

function isNum(ch) {
  const code = ch.charCodeAt(0);
  return code >= 48 && code <= 57;
}
