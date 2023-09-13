function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let currInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= currInterval[1]) {
      currInterval[1] = Math.max(currInterval[1], intervals[i][1]);
    } else {
      result.push(currInterval);
      currInterval = intervals[i];
    }
  }

  result.push(currInterval);
  return result;
}
