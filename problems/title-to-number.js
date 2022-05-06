// Excel sheet column number

function titleToNumber(columnTitle) {
  let num = 0;
  for (const ch of columnTitle) {
    num = num * 26 + (ch.charCodeAt(0) - 64);
  }

  return num;
}

console.log(titleToNumber("AA"));
