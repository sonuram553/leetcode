function maxProfit(prices) {
  let i = 0;
  let profit = 0;
  const n = prices.length;

  while (i < n - 1) {
    if (prices[i] < prices[i + 1]) {
      let j = i;

      i++;
      while (i < n - 1 && prices[i] < prices[i + 1]) i++;

      profit += prices[i] - prices[j];
    }
    i++;
  }

  return profit;
}
