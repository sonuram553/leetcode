// Runtime Complexity O(n)
// Space Complexity O(n)
/**
 * @param {number[]} heights
 * @return {number}
 */
var trap = function (heights) {
  const n = heights.length;
  const maxOnLeft = Array(n).fill(0);
  const maxOnRight = Array(n).fill(0);

  for (let i = 1; i < n; i++)
    maxOnLeft[i] = Math.max(maxOnLeft[i - 1], heights[i - 1]);

  for (let i = n - 2; i >= 0; i--)
    maxOnRight[i] = Math.max(maxOnRight[i + 1], heights[i + 1]);

  return heights.reduce((sum, height, i) => {
    const val = Math.min(maxOnLeft[i], maxOnRight[i]) - height;
    return val < 0 ? sum : sum + val;
  }, 0);
};

// Runtime Complexity O(n)
// Space Complexity O(1)
// Two Pointer approach
var trap = function (heights) {
  const n = heights.length;
  let sum = 0;
  let l = 0;
  let r = n - 1;
  let maxLeft = heights[0];
  let maxRight = heights[r];

  while (l < r) {
    if (maxLeft <= maxRight) {
      l++;
      maxLeft = Math.max(maxLeft, heights[l]);
      sum += maxLeft - heights[l];
    } else {
      r--;
      maxRight = Math.max(maxRight, heights[r]);
      sum += maxRight - heights[r];
    }
  }

  return sum;
};
