/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const n = triangle.length;
  const dp = new Array(triangle[n - 1].length + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    const row = triangle[i];
    for (let c = 0; c < row.length; c++) {
      dp[c] = row[c] + Math.min(dp[c], dp[c + 1]);
    }
  }

  return dp[0];
};
