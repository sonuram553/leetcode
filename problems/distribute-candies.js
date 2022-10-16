function distributeCandies(candyType) {
  const map = {};
  let candyTypeCount = 0;

  for (const type of candyType) {
    if (!map[type]) {
      candyTypeCount++;
      map[type] = 1;
      if (candyTypeCount === candyType.length / 2) return candyTypeCount;
    }
  }

  return candyTypeCount;
}
