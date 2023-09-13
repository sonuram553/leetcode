function insert(intervals, newInterval) {
  const result = [];
  
  for (let i = 0; i < intervals.length; i++) {
    const [left, right] = intervals[i];
    if (newInterval[1] < left) {
      result.push(newInterval);
      return [...result, ...intervals.slice(i)];
    } else if (newInterval[0] > right) result.push(intervals[i]);
    else
      newInterval = [
        Math.min(newInterval[0], left),
        Math.max(newInterval[1], right),
      ];
  }

  result.push(newInterval);
  return result;
}
