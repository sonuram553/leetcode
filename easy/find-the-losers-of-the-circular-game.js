function circularGameLosers(n, k) {
  const visited = new Set([0]);

  let i = 1;
  let nextPersonPosition = 0;

  while (true) {
    nextPersonPosition = (i * k + nextPersonPosition) % n;
    i++;
    if (visited.has(nextPersonPosition)) break;
    visited.add(nextPersonPosition);
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) result.push(i + 1);
  }

  return result;
}
