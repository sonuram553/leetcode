/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];
  const result = [];
  const combination = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  function dfs(i, str) {
    if (i === digits.length) {
      result.push(str);
      return;
    }

    for (const ch of combination[digits[i]]) {
      dfs(i + 1, str + ch);
    }
  }

  dfs(0, "");
  return result;
};
