// https://algo.monster/liteproblems/1318

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  let flipCounts = 0;

  for (let i = 0; i < 30; i++) {
    const bitA = (a >>> i) & 1;
    const bitB = (b >>> i) & 1;
    const bitC = (c >>> i) & 1;

    if ((bitA | bitB) !== bitC) {
      flipCounts += bitA && bitB ? 2 : 1;
    }
  }

  return flipCounts;
};
