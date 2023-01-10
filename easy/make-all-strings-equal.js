function makeEqual(words) {
  const map = {};

  for (const word of words) {
    for (const ch of word) map[ch] = (map[ch] || 0) + 1;
  }

  for (const ch in map) {
    if (map[ch] % words.length) return false;
  }

  return true;
}
