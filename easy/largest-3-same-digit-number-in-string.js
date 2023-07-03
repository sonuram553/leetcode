export function largestGoodInteger(numStr) {
  let i = 1;
  let largestInt = "";
  let str = numStr[0];

  while (i < numStr.length) {
    if (numStr[i] === numStr[i - 1]) {
      str += numStr[i];
      if (str.length === 3) {
        if (str > largestInt) largestInt = str;
        str = "";
      }
    } else str = numStr[i];

    i++;
  }

  return largestInt;
}
