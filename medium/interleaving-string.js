/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  const map = new Map();
  function dfs(i, j) {
    if (i === s1.length && j === s2.length) return true;
    if (map.has([i, j])) return map.get([i, j]);

    if (i < s1.length && s1[i] === s3[i + j] && dfs(i + 1, j)) return true;
    if (j < s2.length && s2[j] === s3[i + j] && dfs(i, j + 1)) return true;

    map.set([i, j], false);
    return false;
  }

  return dfs(0, 0);
};

var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;

  const n = s1.length;
  const m = s2.length;
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(false));
  dp[n][m] = true;

  for (let i = n; i >= 0; i--) {
    for (let j = m; j >= 0; j--) {
      if (i < n && s1[i] === s3[i + j] && dp[i + 1][j]) dp[i][j] = true;
      if (j < m && s2[j] === s3[i + j] && dp[i][j + 1]) dp[i][j] = true;
    }
  }

  return dp[0][0];
};
