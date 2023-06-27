export function maximumValue(strs) {
  let max = 0;

  strs.forEach((str) => {
    if (isNumeric(str)) max = Math.max(max, Number(str));
    else max = Math.max(max, str.length);
  });

  return max;
}

function isNumeric(str) {
  for (const ch of str) {
    const code = ch.charCodeAt(0);
    if (!(code >= 48 && code <= 57)) return false;
  }
  return true;
}
