function countGoodRectangles(rectangles) {
  let maxLen = Math.min(...rectangles[0]);
  let count = 1;

  for (let i = 1; i < rectangles.length; i++) {
    const len = Math.min(...rectangles[i]);

    if (len === maxLen) {
      count++;
    } else if (len > maxLen) {
      maxLen = len;
      count = 1;
    }
  }

  return count;
}
