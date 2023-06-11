function shortestCompletingWord(licensePlate, words) {
  let shortest = "";
  const map = getCharMap(licensePlate);

  for (const word of words) {
    const currMap = getCharMap(word);
    if (Object.keys(currMap).length < Object.keys(map).length) continue;

    let isCompleting = true;
    for (const ch in map) {
      if (!(ch in currMap) || currMap[ch] < map[ch]) {
        isCompleting = false;
        break;
      }
    }

    if (isCompleting && (!shortest || word.length < shortest.length)) {
      shortest = word;
    }
  }

  return shortest;
}

function getCharMap(str) {
  const map = {};
  for (let ch of str) {
    if (isChar(ch)) {
      ch = ch.toLowerCase();
      map[ch] = (map[ch] || 0) + 1;
    }
  }
  return map;
}

function isChar(ch) {
  const code = ch.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}
