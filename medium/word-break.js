/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const n = s.length;
  const dp = new Array(n + 1).fill(false);

  dp[n] = true;

  for (let i = n - 1; i >= 0; i--) {
    for (const word of wordDict) {
      const wordLen = word.length;
      if (i + wordLen <= n && s.slice(i, i + wordLen) === word) {
        dp[i] = dp[i + wordLen];
      }
      if (dp[i]) break;
    }
  }

  return dp[0];
};
