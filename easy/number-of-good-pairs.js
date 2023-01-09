function numIdenticalPairs(nums) {
  const map = {};
  for (const num of nums) map[num] = (map[num] || 0) + 1;

  let pairs = 0;
  for (const num in map) {
    const count = map[num];
    pairs += (count * (count - 1)) / 2;
  }

  return pairs;
}
