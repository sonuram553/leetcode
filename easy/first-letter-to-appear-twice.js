function repeatedCharacter(str) {
  const map = {};

  for (const ch of str) {
    if (ch in map) {
      map[ch]++;
      if (map[ch] === 2) return ch;
    } else map[ch] = 1;
  }
}
