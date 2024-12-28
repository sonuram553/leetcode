/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const mapPS = {};
  const mapSP = {};
  const words = s.split(" ");

  if (pattern.length !== words.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    const ch = pattern[i];
    const word = words[i];

    if (ch in mapPS) {
      if (mapPS[ch] !== word) return false;
    } else if (mapSP.hasOwnProperty(word)) {
      if (mapSP[word] !== ch) return false;
    } else {
      mapPS[ch] = word;
      mapSP[word] = ch;
    }
  }

  return true;
};
