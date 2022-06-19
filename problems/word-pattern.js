function wordPattern(pattern, str) {
  let map = {};
  const words = str.split(" ");

  if (words.length !== pattern.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    const ch = pattern[i];
    if (map[ch] && map[ch] !== words[i]) return false;
    map[ch] = words[i];
  }

  map = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (map[word] && map[word] !== pattern[i]) return false;
    map[word] = pattern[i];
  }

  return true;
}
