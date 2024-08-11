// https://www.youtube.com/watch?v=Ua0GhsJSlWM

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dp = Array.from({ length: text2.length + 1 }, () =>
    Array(text1.length + 1).fill(0)
  );

  for (let r = text2.length - 1; r >= 0; r--) {
    for (let c = text1.length - 1; c >= 0; c--) {
      if (text2[r] === text1[c]) {
        dp[r][c] = dp[r + 1][c + 1] + 1;
      } else {
        dp[r][c] = Math.max(dp[r + 1][c], dp[r][c + 1]);
      }
    }
  }

  return dp[0][0];
};
