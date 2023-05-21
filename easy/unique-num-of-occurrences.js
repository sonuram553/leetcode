function uniqueOccurrences(arr) {
  const map = {};
  const set = new Set();

  for (const num of arr) {
    map[num] = (map[num] || 0) + 1;
  }

  for (const key in map) {
    const count = map[key];
    if (set.has(count)) return false;
    set.add(count);
  }

  return true;
}
