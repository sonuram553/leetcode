function largestTriangleArea(points) {
  let largestArea = 0;
  const n = points.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const side1 = distance(points[i], points[j]);
        const side2 = distance(points[i], points[k]);
        const side3 = distance(points[j], points[k]);

        if (isTriangle(side1, side2, side3))
          largestArea = Math.max(largestArea, area(side1, side2, side3));
      }
    }
  }

  return largestArea;
}

function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) return true;
  return false;
}

function distance(point1, point2) {
  return Math.sqrt(
    Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2)
  );
}

function area(a, b, c) {
  let s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
