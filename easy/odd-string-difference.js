function oddString(words) {
  const map = {};

  for (let i = 0; i < words.length; i++) {
    const str = diffIntString(words[i]);

    if (str in map) {
      if (map[str].length !== 2) map[str].push(i);
    } else map[str] = [i];
  }

  for (const key in map) {
    if (map[key].length === 1) return words[map[key][0]];
  }
}

function diffIntString(word) {
  let result = [];

  for (let i = 0; i < word.length - 1; i++) {
    result.push(word[i + 1].charCodeAt(0) - word[i].charCodeAt(0));
  }

  return result.join("-");
}
