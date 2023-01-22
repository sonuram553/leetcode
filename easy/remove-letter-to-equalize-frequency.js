function equalFrequency(word) {
  const map = {};
  for (const ch of word) map[ch] = (map[ch] || 0) + 1;

  // Check whether each character in the word is unique
  let isUnique = true;

  for (const ch in map) {
    if (map[ch] > 1) {
      isUnique = false;
      break;
    }
  }

  if (isUnique) return true;

  // Word's characters are not unique
  for (const ch in map) {
    const mapCopy = { ...map };
    if (map[ch] === 1) delete mapCopy[ch];
    else mapCopy[ch]--;
    if (isAllSame(mapCopy)) return true;
  }

  return false;
}

function isAllSame(map) {
  let firstValue = -1;

  for (const ch in map) {
    if (firstValue === -1) firstValue = map[ch];
    else if (map[ch] !== firstValue) return false;
  }

  return true;
}
