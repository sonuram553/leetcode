export function convert(s, numRows) {
  if (s.length === 1 || numRows === 1) return s;
  
  let str = "";
  const n = s.length;

  for (let i = 0; i < numRows; i++) {
    let j = i;

    if (i === 0 || i === numRows - 1) {
      while (j < n) {
        str += s[j];
        j += (numRows - 1) * 2;
      }
    } else {
      while (j < n) {
        str += s[j];
        let nextIndex = j + (numRows - 1 - i) * 2;
        if (nextIndex < n) str += s[nextIndex];
        j += (numRows - 1) * 2;
      }
    }
  }

  return str;
}
