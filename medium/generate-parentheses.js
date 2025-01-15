/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  function dfs(str, openCount, closedCount) {
    if (openCount === closedCount && closedCount === n) {
      result.push(str);
      return;
    }

    if (openCount < n) {
      dfs(str + "(", openCount + 1, closedCount);
    }

    if (closedCount < openCount) {
      dfs(str + ")", openCount, closedCount + 1);
    }
  }

  dfs("", 0, 0);
  return result;
};
