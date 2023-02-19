function minTimeToVisitAllPoints(points) {
  let seconds = 0;

  for (let i = 1; i < points.length; i++) {
    const curr = points[i];
    const prev = points[i - 1];

    seconds += Math.max(
      Math.abs(curr[0] - prev[0]),
      Math.abs(curr[1] - prev[1])
    );
  }

  return seconds;
}
