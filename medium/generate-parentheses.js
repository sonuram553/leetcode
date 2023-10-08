/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  function dfs(str = "(", openParenCount = 1, closeParenCount = 0) {
    if (openParenCount === closeParenCount && openParenCount === n) {
      result.push(str);
      return;
    }

    if (openParenCount < n) dfs(str + "(", openParenCount + 1, closeParenCount);
    if (closeParenCount < openParenCount)
      dfs(str + ")", openParenCount, closeParenCount + 1);
  }

  dfs();
  return result;
};
