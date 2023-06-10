function countCharacters(words, chars) {
  let count = 0;
  const map = getCharMap(chars);

  for (const word of words) {
    let canBeFormed = true;
    const currMap = getCharMap(word);

    for (const ch in currMap) {
      if (!map[ch] || currMap[ch] > map[ch]) {
        canBeFormed = false;
        break;
      }
    }

    if (canBeFormed) count += word.length;
  }

  return count;
}

function getCharMap(str) {
  const map = {};
  for (const ch of str) {
    map[ch] = (map[ch] || 0) + 1;
  }
  return map;
}
