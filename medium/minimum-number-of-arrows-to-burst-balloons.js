function findMinArrowShots(points) {
  const n = points.length;
  let arrowCount = 1;

  points.sort((start, end) => start[0] - end[0]);
  let prev = points[0];

  for (let i = 1; i < n; i++) {
    const [start, end] = points[i];
    if (start > prev[1]) {
      arrowCount++;
      prev = points[i];
    } else prev[1] = Math.min(end, prev[1]);
  }

  return arrowCount;
}
