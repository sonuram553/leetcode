// https://www.youtube.com/watch?v=Bbu4Qjzf7A0

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const wordsMap = {};
  const wordLen = words[0].length;
  const totalWords = words.length;
  const result = [];

  for (const word of words) {
    wordsMap[word] = (wordsMap[word] || 0) + 1;
  }

  for (let i = 0; i <= s.length - totalWords * wordLen; i++) {
    const seenWords = {};

    for (let j = 0; j < totalWords; j++) {
      const index = i + j * wordLen;
      const currWord = s.slice(index, index + wordLen);

      if (!(currWord in wordsMap)) break;
      seenWords[currWord] = (seenWords[currWord] || 0) + 1;

      if (seenWords[currWord] > wordsMap[currWord]) break;
      if (j + 1 === totalWords) result.push(i);
    }
  }

  return result;
};
