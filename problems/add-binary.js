const addBinary = function (strA, strB) {
  let carry = 0;
  let result = "";
  let i = strA.length - 1;
  let j = strB.length - 1;

  while (i >= 0 || j >= 0) {
    let bitA = 0;
    let bitB = 0;

    if (i !== -1) {
      bitA = +strA[i];
      i -= 1;
    }

    if (j !== -1) {
      bitB = +strB[j];
      j -= 1;
    }

    result = ((carry + bitA + bitB) % 2) + result;
    carry = Math.floor((carry + bitA + bitB) / 2);
  }

  if (carry === 1) {
    result = 1 + result;
  }

  return result;
};
