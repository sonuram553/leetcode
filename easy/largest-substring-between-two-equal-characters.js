function maxLengthBetweenEqualCharacters(s) {
  let max = -1;
  const map = {};

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch in map) {
      max = Math.max(max, i - map[ch] - 1);
    } else map[ch] = i;
  }

  return max;
}
