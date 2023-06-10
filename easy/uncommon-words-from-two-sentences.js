function uncommonFromSentences(s1, s2) {
  const result = [];
  const s1WordMap = getWordMap(s1);
  const s2WordMap = getWordMap(s2);

  for (const word in s1WordMap) {
    if (s1WordMap[word] === 1 && !(word in s2WordMap)) result.push(word);
  }

  for (const word in s2WordMap) {
    if (s2WordMap[word] === 1 && !(word in s1WordMap)) result.push(word);
  }

  return result;
}

function getWordMap(str) {
  const map = {};
  for (const word of str.split(" ")) {
    map[word] = (map[word] || 0) + 1;
  }
  return map;
}
