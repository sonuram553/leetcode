function mergeAlternately(word1, word2) {
  let i = 0;
  let j = 0;
  let result = "";

  while (i < word1.length && j < word2.length)
    result += word1[i++] + word2[j++];

  while (i < word1.length) result += word1[i++];
  while (j < word2.length) result += word2[j++];

  return result;
}
