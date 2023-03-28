function kidsWithCandies(candies, extraCandies) {
  let max = Math.max(...candies);

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) candies[i] = true;
    else candies[i] = false;
  }

  return candies;
}
