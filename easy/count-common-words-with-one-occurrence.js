function countWords(words1, words2) {
  const words1Map = {};
  const words2Map = {};

  for (const word of words1) words1Map[word] = (words1Map[word] || 0) + 1;

  for (const word of words2) {
    if (word in words1Map) {
      if (words1Map[word] === 1) {
        words2Map[word] = (words2Map[word] || 0) + 1;
      }
    }
  }

  let count = 0;
  for (const word in words2Map) {
    if (words2Map[word] === 1) count++;
  }

  return count;
}
