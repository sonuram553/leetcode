/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  const cols = new Set();
  const positiveDiag = new Set(); // r + c
  const negativeDiag = new Set(); // r - c

  let total = 0;

  function backtrack(r) {
    if (r === n) {
      total++;
      return;
    }

    for (let c = 0; c < n; c++) {
      if (cols.has(c) || positiveDiag.has(r + c) || negativeDiag.has(r - c))
        continue;

      cols.add(c);
      positiveDiag.add(r + c);
      negativeDiag.add(r - c);

      backtrack(r + 1);

      cols.delete(c);
      positiveDiag.delete(r + c);
      negativeDiag.delete(r - c);
    }
  }

  backtrack(0);

  return total;
};
