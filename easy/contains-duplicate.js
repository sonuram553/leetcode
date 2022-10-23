function containsDuplicate(nums) {
  const map = {};

  for (const num of nums) {
    map[num] = (map[num] && map[num] + 1) || 1;
    if (map[num] === 2) return true;
  }

  return false;
}
