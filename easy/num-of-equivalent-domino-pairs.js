function numEquivDominoPairs(dominoes) {
  const map = {};

  for (const [left, right] of dominoes) {
    let str = "";
    if (left < right) str = `${left}${right}`;
    else str = `${right}${left}`;

    map[str] = (map[str] || 0) + 1;
  }

  let pairs = 0;

  for (const key in map) {
    const count = map[key];

    // (count * (count - 1)) / 2
    // Above formula is simplification of the formula to find Combination of n(count in our case) objects
    // taken r(2 in our case) at a time
    pairs += Math.floor((count * (count - 1)) / 2);
  }

  return pairs;
}
