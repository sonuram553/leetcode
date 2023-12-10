// https://www.youtube.com/watch?v=Gr5Ot8b9OoA

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (str) {
  const stack = [];

  for (const ch of str) {
    if (ch === " ") continue;

    if (ch === ")") {
      let currExp = "";
      while (stack[stack.length - 1] !== "(") {
        currExp = stack.pop() + currExp;
      }
      // Remove "("
      stack.pop();
      let num = cal(currExp);

      if (num < 0 && stack.length) {
        if (stack[stack.length - 1] === "-") {
          stack.pop();
          stack.push("+");
        } else {
          stack.pop();
          stack.push("-");
        }
        num = -num;
      }

      for (const digit of String(num)) stack.push(digit);
    } else stack.push(ch);
  }

  // Now stack will not contain any parentheses
  let exp = "";
  while (stack.length) exp = stack.pop() + exp;
  return cal(exp);
};

function cal(str) {
  let sum = 0;
  let num = 0;
  let tens = 1;

  // Start from the right end of the string
  for (let i = str.length - 1; i >= 0; i--) {
    const ch = str[i];
    if (ch === " ") continue;
    if (ch === "+") {
      sum += num;
      num = 0;
      tens = 1;
    } else if (ch === "-") {
      sum -= num;
      num = 0;
      tens = 1;
    } else {
      // Create number out of digits
      num += Number(ch) * tens;
      tens *= 10;
    }
  }

  // Add last number to the sum
  return sum + num;
}
