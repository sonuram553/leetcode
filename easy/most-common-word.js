function mostCommonWord(paragraph, banned) {
  const map = {};
  let word = "";
  let symbols = "!?',;.";

  for (const ch of paragraph) {
    if (ch === " " || symbols.includes(ch)) {
      if (word && !banned.includes(word)) map[word] = (map[word] || 0) + 1;
      word = "";
    } else word += ch.toLowerCase();
  }

  word && (map[word] = (map[word] || 0) + 1);

  let maxCount = 0;
  let mostFrequentWord = "";

  for (const word in map) {
    if (map[word] > maxCount) {
      mostFrequentWord = word;
      maxCount = map[word];
    }
  }

  return mostFrequentWord;
}
