function judgeCircle(moves) {
  const map = {};

  for (const ch of moves) {
    map[ch] = (map[ch] || 0) + 1;
  }

  if (map.U === map.D) {
    if (map.L === map.R) return true;
  }

  return false;
}
