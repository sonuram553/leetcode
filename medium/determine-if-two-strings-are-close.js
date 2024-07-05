/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) return false;

  const charMap1 = {};
  const charMap2 = {};

  for (const ch of word1) {
    charMap1[ch] = (charMap1[ch] || 0) + 1;
  }

  for (const ch of word2) {
    charMap2[ch] = (charMap2[ch] || 0) + 1;
  }

  // Check whether there are characters difference
  const countMap1 = {};
  for (const key in charMap1) {
    if (!(key in charMap2)) return false;
    const count = charMap1[key];
    countMap1[count] = (countMap1[count] || 0) + 1;
  }

  const countMap2 = {};
  for (const key in charMap2) {
    if (!(key in charMap1)) return false;
    const count = charMap2[key];
    countMap2[count] = (countMap2[count] || 0) + 1;
  }

  // Check whether characters count difference
  for (const key in countMap1) {
    if (!(key in countMap2) || countMap1[key] !== countMap2[key]) return false;
  }

  for (const key in countMap2) {
    if (!(key in countMap1) || countMap1[key] !== countMap2[key]) return false;
  }

  return true;
};
