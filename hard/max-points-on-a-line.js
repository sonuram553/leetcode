// Time Complexity: O(n^3)
// Space Complexity: O(1)

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let res = 1;
  const n = points.length;

  for (let i = 0; i < n; i++) {
    const point1 = points[i];

    for (let j = 0; j < n; j++) {
      if (i === j) continue;

      const point2 = points[j];
      const slope = getSlope(point1, point2);
      let count = 2;

      for (let k = 0; k < n; k++) {
        if (k === i || k === j) continue;

        const point3 = points[k];
        if (slope === getSlope(point1, point3)) count++;
      }

      res = Math.max(res, count);
    }
  }

  return res;
};

function getSlope(point1, point2) {
  if (point1[0] === point2[0]) return Infinity;
  return (point1[1] - point2[1]) / (point1[0] - point2[0]);
}

// Time Complexity: O(n^2)
// Space Complexity: O(n)

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let res = 1;
  const n = points.length;

  for (let i = 0; i < n; i++) {
    const slopeMap = {}; // Stores the number of points falls in current slope

    for (let j = i + 1; j < n; j++) {
      const slope = getSlope(points[i], points[j]);

      if (!(slope in slopeMap)) slopeMap[slope] = 2;
      else slopeMap[slope] += 1;

      res = Math.max(res, slopeMap[slope]);
    }
  }

  return res;
};
