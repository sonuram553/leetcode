function makeFancyString(str) {
  let i = 1;
  let count = 1;
  let fancyStr = str[0];

  while (i < str.length) {
    if (str[i] !== fancyStr[fancyStr.length - 1]) {
      fancyStr += str[i];
      count = 1;
    } else if (count === 1) {
      count++;
      fancyStr += str[i];
    }

    i++;
  }

  return fancyStr;
}
