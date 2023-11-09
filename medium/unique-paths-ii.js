/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const rows = obstacleGrid.length;
  const cols = obstacleGrid[0].length;

  for (let r = rows - 1; r >= 0; r--) {
    for (let c = cols - 1; c >= 0; c--) {
      if (obstacleGrid[r][c] === 1) {
        obstacleGrid[r][c] = 0;
        continue;
      }

      let rightValue = 0;
      let bottomValue = 0;

      if (c < cols - 1) rightValue = obstacleGrid[r][c + 1];
      if (r === rows - 1 && c === cols - 1) bottomValue = 1;
      if (r < rows - 1) bottomValue = obstacleGrid[r + 1][c];

      obstacleGrid[r][c] = rightValue + bottomValue;
    }
  }

  return obstacleGrid[0][0];
};
