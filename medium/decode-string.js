/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];

    if (ch === "]") {
      let chars = "";
      while (isLetter(peek(stack))) {
        chars = stack.pop() + chars;
      }

      // Remove [
      stack.pop();

      let numStr = "";
      while (isNum(peek(stack))) {
        numStr = stack.pop() + numStr;
      }

      stack.push(chars.repeat(parseInt(numStr)));
    } else stack.push(ch);
  }

  let result = "";
  while (stack.length) {
    result = stack.pop() + result;
  }

  return result;
};

function peek(stack) {
  return stack[stack.length - 1];
}

function isLetter(ch) {
  const code = ch.charCodeAt();
  return code >= 97 && code <= 122;
}

function isNum(ch) {
  return "0123456789".includes(ch);
}
