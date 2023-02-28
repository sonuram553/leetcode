function numWaterBottles(numBottles, numExchange) {
  let drinkCount = numBottles;
  let emptyBottles = numBottles;

  while (emptyBottles >= numExchange) {
    const value = Math.floor(emptyBottles / numExchange);
    drinkCount += value;
    emptyBottles = value + (emptyBottles % numExchange);
  }

  return drinkCount;
}
