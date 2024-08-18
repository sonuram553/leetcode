// https://www.youtube.com/watch?v=RyBM56RIWrM

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let offset = 1;
  const dp = Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) offset = i;
    dp[i] = 1 + dp[i - offset];
  }

  return dp;
};
