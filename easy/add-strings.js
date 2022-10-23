function addStrings(num1, num2) {
  let bigNum, smallNum;

  if (num1.length > num2.length) {
    bigNum = num1;
    smallNum = num2;
  } else {
    bigNum = num2;
    smallNum = num1;
  }

  let carry = 0;
  let sum = "";

  // Iterate through the smaller number first
  for (let i = smallNum.length - 1, j = bigNum.length - 1; i >= 0; i--, j--) {
    const result = Number(smallNum[i]) + Number(bigNum[j]) + carry;
    if (result >= 10) {
      carry = 1;
      sum = result - 10 + sum;
    } else {
      carry = 0;
      sum = result + sum;
    }
  }

  // Iterate through the rest of the big number
  for (let i = bigNum.length - smallNum.length - 1; i >= 0; i--) {
    const result = Number(bigNum[i]) + carry;
    if (result >= 10) {
      carry = 1;
      sum = result - 10 + sum;
    } else {
      carry = 0;
      sum = result + sum;
    }
  }

  if (carry) return carry + sum;
  return sum;
}
