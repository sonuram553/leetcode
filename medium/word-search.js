/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rowsLen = board.length;
  const colsLen = board[0].length;
  const visited = new Set();

  function dfs(r, c, i) {
    if (i === word.length) return true;

    const key = getKey(r, c);
    if (
      r < 0 ||
      c < 0 ||
      r >= rowsLen ||
      c >= colsLen ||
      word[i] !== board[r][c] ||
      visited.has(key)
    )
      return false;

    visited.add(key);
    const res =
      dfs(r, c - 1, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r + 1, c, i + 1);
    visited.delete(key);

    return res;
  }

  for (let r = 0; r < rowsLen; r++) {
    for (let c = 0; c < colsLen; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }

  return false;
};

function getKey(r, c) {
  return `${r},${c}`;
}
