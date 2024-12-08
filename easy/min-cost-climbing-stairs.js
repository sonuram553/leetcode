/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  let a = cost[n - 1];
  let b = cost[n - 2];

  for (let i = n - 3; i >= 0; i--) {
    const c = cost[i] + Math.min(a, b);
    a = b;
    b = c;
  }

  return Math.min(a, b);
};
