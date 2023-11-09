/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const word1Len = word1.length;
  const word2Len = word2.length;
  const dp = Array.from({ length: word1Len + 1 }, () =>
    Array(word2Len + 1).fill(Infinity)
  );

  for (let i = 0; i < word2Len + 1; i++) dp[word1Len][i] = word2Len - i;
  for (let i = 0; i < word1Len + 1; i++) dp[i][word2Len] = word1Len - i;

  for (let i = word1Len - 1; i >= 0; i--) {
    for (let j = word2Len - 1; j >= 0; j--) {
      if (word1[i] === word2[j]) dp[i][j] = dp[i + 1][j + 1];
      else {
        dp[i][j] = 1 + Math.min(dp[i][j + 1], dp[i + 1][j], dp[i + 1][j + 1]);
      }
    }
  }

  return dp[0][0];
};
