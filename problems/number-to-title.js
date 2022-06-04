// Excel Sheet Column Title

function convertToTitle(columnNumber) {
  let num = columnNumber;
  let title = "";

  while (num !== 0) {
    const remainder = num % 26;
    num = Math.floor(num / 26);

    if (remainder === 0) {
      num -= 1;
      title = "Z" + title;
    } else title = String.fromCharCode(remainder + 64) + title;
  }

  return title;
}

convertToTitle(53);
