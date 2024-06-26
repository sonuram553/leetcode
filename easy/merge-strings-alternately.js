/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let str = "";
  let i = 0;
  let j = 0;

  while (i < word1.length && j < word2.length) {
    str += word1[i] + word2[j];
    i++;
    j++;
  }

  return str + word1.slice(i) + word2.slice(j);
};
