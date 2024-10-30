// https://www.youtube.com/watch?v=q4Vr307dOzs

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const n = prices.length;

  // Calculate profits from left to right.
  const left = Array(n).fill(0);
  let minCP = prices[0];

  for (let i = 1; i < n; i++) {
    left[i] = Math.max(left[i - 1], prices[i] - minCP);
    minCP = Math.min(minCP, prices[i]);
  }

  // Calculate profits from right to left.
  const right = Array(n).fill(0);
  let maxSP = prices[n - 1];

  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], maxSP - prices[i]);
    maxSP = Math.max(maxSP, prices[i]);
  }

  let result = 0;

  for (let i = 0; i < n; i++) {
    result = Math.max(result, left[i] + right[i]);
  }

  return result;
};
