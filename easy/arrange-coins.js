/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let l = 1;
  let r = n;
  let result = 0;

  while (l <= r) {
    const mid = (l + r) >>> 1;
    const coins = (mid / 2) * (mid + 1);

    if (coins > n) r = mid - 1;
    else {
      l = mid + 1;
      result = Math.max(result, mid);
    }
  }

  return result;
};
