function maximumPopulation(logs) {
  const map = {};
  const n = logs.length;

  for (let i = 0; i < n; i++) {
    let [x, y] = logs[i];

    if (x in map) {
      // Don't process x
      x = null;
    } else map[x] = 1;

    if (x + 1 === y || y - 1 in map) {
      // Don't process y - 1
      y = null;
    } else map[y - 1] = 1;

    if (x || y) {
      for (let j = 0; j < n; j++) {
        if (i !== j) {
          if (x && x >= logs[j][0] && x < logs[j][1]) {
            map[x]++;
          }

          if (y && y - 1 >= logs[j][0] && y - 1 < logs[j][1]) {
            map[y - 1]++;
          }
        }
      }
    }
  }

  // Find max population
  let maxPopulation = 0;
  for (const key in map) {
    maxPopulation = Math.max(maxPopulation, map[key]);
  }

  // Find min year with max population
  let minYear = null;
  for (const key in map) {
    if (map[key] === maxPopulation) {
      if (minYear === null) minYear = Number(key);
      else if (Number(key) < minYear) minYear = Number(key);
    }
  }

  return minYear;
}

export default maximumPopulation;
