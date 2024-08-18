// https://www.youtube.com/watch?v=Ew_R-ZfhPEc&list=LL&index=1

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  const profit = Array(prices.length).fill(0);

  for (let i = 1; i < prices.length; i++) {
    profit[i] = Math.max(profit[i - 1], prices[i] - prices[i - 1] - fee);
    prices[i] = Math.min(prices[i - 1], prices[i] - profit[i]);
  }

  return profit[profit.length - 1];
};
