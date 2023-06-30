export function numberOfLines(widths, s) {
  let i = 0;
  let lines = 1;
  let lineWidth = 0;
  const n = s.length;

  while (i < n) {
    const width = widths[getIndex(s[i])];

    if (lineWidth + width === 100) {
      if (i === n - 1) lineWidth += width;
      else {
        lines++;
        lineWidth = 0;
      }
    } else if (lineWidth + width > 100) {
      lines++;
      lineWidth = width;
    } else {
      lineWidth += width;
    }

    i++;
  }

  return [lines, lineWidth];
}

function getIndex(ch) {
  return ch.charCodeAt(0) - 97;
}
