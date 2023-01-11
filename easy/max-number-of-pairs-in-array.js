function numberOfPairs(nums) {
  const map = {};
  for (const num of nums) map[num] = (map[num] || 0) + 1;

  let pairs = 0;
  let leftover = 0;

  for (const key in map) {
    const count = map[key];

    pairs += Math.floor(count / 2);
    leftover += count % 2;
  }

  return [pairs, leftover];
}
