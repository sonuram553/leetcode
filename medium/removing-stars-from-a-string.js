/**
 * @param {string} str
 * @return {string}
 */
var removeStars = function (str) {
  const stack = [];
  for (const ch of str) {
    if (ch === "*") {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.join("");
};
