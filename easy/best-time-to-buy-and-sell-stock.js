/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let currMinPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < currMinPrice) currMinPrice = prices[i];
    else {
      profit = Math.max(profit, prices[i] - currMinPrice);
    }
  }

  return profit;
};
