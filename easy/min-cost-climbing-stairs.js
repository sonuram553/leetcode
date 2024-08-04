// https://www.geeksforgeeks.org/minimum-cost-to-reach-the-top-of-the-floor-by-climbing-stairs/
// Save last two steps cost in a and b.
// Check for below two costs manually
// [1, 10, 3]
// [2, 5, 3, 1, 7, 3, 4]

function minCostClimbingStairs(cost) {
  let a = 0;
  let b = 0;

  cost.forEach((value) => {
    const c = value + Math.min(a, b);
    a = b;
    b = c;
  });

  return Math.min(a, b);
}
