function nearestValidPoint(x, y, points) {
  let index = -1;
  let minDistance = Infinity;

  for (let i = 0; i < points.length; i++) {
    const [currX, currY] = points[i];
    if (currX === x && currY === y) return i;
    if (currX === x) {
      const dist = Math.abs(currY - y);
      if (dist < minDistance) {
        minDistance = dist;
        index = i;
      }
    } else if (currY === y) {
      const dist = Math.abs(currX - x);
      if (dist < minDistance) {
        minDistance = dist;
        index = i;
      }
    }
  }

  return index;
}
