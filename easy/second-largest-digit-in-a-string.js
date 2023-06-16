function secondHighest(s) {
  let max = -1,
    secMax = -1;

  for (const ch of s) {
    if (isNumber(ch)) {
      const num = Number(ch);

      if (num === max) {
        // Do nothing
      } else if (num > max) {
        secMax = max;
        max = num;
      } else if (num > secMax) secMax = num;
    }
  }

  return secMax;
}

function isNumber(ch) {
  const code = ch.charCodeAt(0);
  return code >= 48 && code <= 57;
}
