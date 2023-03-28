function numJewelsInStones(jewels, stones) {
  const map = {};
  const set = new Set(jewels);

  for (const stone of stones) {
    if (set.has(stone)) {
      map[stone] = (map[stone] || 0) + 1;
    }
  }

  let count = 0;

  for (const key in map) {
    count += map[key];
  }

  return count;
}
