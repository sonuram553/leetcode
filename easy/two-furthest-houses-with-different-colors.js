function maxDistance(colors) {
  let maxDist = 0;
  const n = colors.length;

  for (let i = 1; i < n; i++) {
    if (colors[i] !== colors[0]) maxDist = i;
  }

  for (let i = n - 2; i >= 0; i--) {
    if (colors[i] !== colors[n - 1]) maxDist = Math.max(maxDist, n - 1 - i);
  }

  return maxDist;
}
