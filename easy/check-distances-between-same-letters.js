function checkDistances(s, distance) {
  const map = {};

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch in map) {
      const index = ch.charCodeAt(0) - 97;
      if (distance[index] !== i - map[ch] - 1) return false;
    } else map[ch] = i;
  }

  return true;
}
