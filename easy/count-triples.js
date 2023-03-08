// Time Complexity: O(n^2)
// Space Complexity: O(1)

function countTriples(n) {
  let count = 0;

  for (let a = 1; a < n - 1; a++) {
    for (let b = a + 1; b < n; b++) {
      const x = a * a + b * b;
      const y = Math.sqrt(x);

      // For float y % 1 will not be zero.
      if (y % 1 === 0 && y <= n) count++;
    }
  }

  return 2 * count;
}
