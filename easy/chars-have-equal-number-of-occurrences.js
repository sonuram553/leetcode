function areOccurrencesEqual(str) {
  const map = {};
  for (const ch of str) map[ch] = (map[ch] || 0) + 1;

  let prevCount = 0;
  for (const ch in map) {
    const count = map[ch];
    if (prevCount && prevCount !== count) return false;
    prevCount = count;
  }

  return true;
}
