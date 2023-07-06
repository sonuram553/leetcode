function thousandSeparator(n) {
  if (n < 1000) return String(n);

  let str = "";
  let temp = n;
  let formattedNum = "";

  while (temp) {
    const digit = temp % 10;
    temp = Math.floor(temp / 10);
    str = digit + str;
    if (str.length === 3) {
      formattedNum = str + formattedNum;
      if (temp) formattedNum = "." + formattedNum;
      str = "";
    }
  }

  return str + formattedNum;
}
