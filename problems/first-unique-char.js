function firstUniqueChar(str) {
  const map = {};

  for (const ch of str) {
    map[ch] = map[ch] + 1 || 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === 1) return i;
  }

  return -1;
}
