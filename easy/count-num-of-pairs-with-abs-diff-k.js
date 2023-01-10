function countKDifference(nums, k) {
  const map = {};
  for (const num of nums) map[num] = (map[num] || 0) + 1;

  let pairs = 0;
  for (const key in map) {
    const num = Number(key);
    if (map[num + k]) pairs += map[num] * map[num + k];
  }

  return pairs;
}
