function isCovered(ranges, left, right) {
  const set = new Set();

  for (const [left, right] of ranges) {
    for (let i = left; i <= right; i++) set.add(i);
  }

  for (let i = left; i <= right; i++) if (!set.has(i)) return false;

  return true;
}
