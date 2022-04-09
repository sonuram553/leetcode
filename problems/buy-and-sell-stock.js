// Best time to Buy and Sell Stock

function maxProfit(prices) {
  let left = 0; // Buy
  let right = 1; // Sell
  let max = 0;

  while (right < prices.length) {
    const profit = prices[right] - prices[left];
    if (profit > 0) {
      max = Math.max(max, profit);
      right += 1;
    } else {
      left = right;
      right += 1;
    }
  }

  return max;
}
