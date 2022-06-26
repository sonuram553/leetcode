function findTheDifference(source, target) {
  const map = {};

  for (const ch of target) {
    map[ch] = (map[ch] || 0) + 1;
  }

  for (const ch of source) {
    map[ch]--;
    if (map[ch] === 0) delete map[ch];
  }

  for (const key in map) {
    return key;
  }
}
