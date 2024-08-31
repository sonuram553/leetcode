/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort(([x1], [x2]) => x1 - x2);

  let shotsCount = 0;
  let [prevStart, prevEnd] = points[0];

  for (const [start, end] of points.slice(1)) {
    if (start <= prevEnd) {
      prevStart = start;
      prevEnd = Math.min(prevEnd, end);
    } else {
      shotsCount++;
      prevStart = start;
      prevEnd = end;
    }
  }

  return shotsCount + 1;
};
