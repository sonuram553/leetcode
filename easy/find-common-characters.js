function commonChars(words) {
  const result = [];
  const charsMapArray = words.map((word) => getCharMap(word));

  for (const ch in charsMapArray[0]) {
    let count = charsMapArray[0][ch];

    for (let i = 1; i < charsMapArray.length; i++) {
      const map = charsMapArray[i];
      if (!(ch in map)) {
        count = 0;
        break;
      }

      count = Math.min(count, map[ch]);
    }

    for (let i = 0; i < count; i++) result.push(ch);
  }

  return result;
}

function getCharMap(word) {
  const map = {};
  for (const ch of word) {
    map[ch] = (map[ch] || 0) + 1;
  }
  return map;
}
