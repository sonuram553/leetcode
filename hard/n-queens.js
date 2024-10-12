/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const cols = new Set();
  const positiveDiag = new Set(); // r + c
  const negativeDiag = new Set(); // r - c

  const currBoard = [];
  const result = [];

  function backtrack(r) {
    if (r === n) {
      result.push(currBoard.map((row) => row.join("")));
      return;
    }

    for (let c = 0; c < n; c++) {
      if (cols.has(c) || positiveDiag.has(r + c) || negativeDiag.has(r - c))
        continue;

      cols.add(c);
      positiveDiag.add(r + c);
      negativeDiag.add(r - c);

      const arr = Array(n).fill(".");
      arr[c] = "Q";
      currBoard[r] = arr;

      backtrack(r + 1);

      cols.delete(c);
      positiveDiag.delete(r + c);
      negativeDiag.delete(r - c);
    }
  }

  backtrack(0);

  return result;
};
