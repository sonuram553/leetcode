function buyChoco(prices, money) {
  let min = prices[0];
  let secMin = Infinity;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < min) {
      secMin = min;
      min = prices[i];
    } else if (prices[i] < secMin) secMin = prices[i];
  }

  return min + secMin > money ? money : money - (min + secMin);
}
