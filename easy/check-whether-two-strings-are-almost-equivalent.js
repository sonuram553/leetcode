function checkAlmostEquivalent(word1, word2) {
  const word1Map = {};
  const word2Map = {};

  for (const ch of word1) word1Map[ch] = (word1Map[ch] || 0) + 1;
  for (const ch of word2) word2Map[ch] = (word2Map[ch] || 0) + 1;

  for (const ch in word1Map) {
    if (ch in word2Map) {
      if (Math.abs(word1Map[ch] - word2Map[ch]) > 3) return false;
    } else if (word1Map[ch] > 3) return false;
  }

  for (const ch in word2Map) {
    if (ch in word1Map) {
      if (Math.abs(word1Map[ch] - word2Map[ch]) > 3) return false;
    } else if (word2Map[ch] > 3) return false;
  }

  return true;
}
