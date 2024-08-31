// https://www.youtube.com/watch?v=nONCGxWoUfM

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort(([x1], [x2]) => x1 - x2);

  let overlapCount = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start >= prevEnd) {
      prevEnd = end;
    } else {
      overlapCount++;
      prevEnd = Math.min(prevEnd, end);
    }
  }

  return overlapCount;
};
