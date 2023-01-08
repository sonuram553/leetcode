function findLucky(arr) {
  const map = {};
  for (const num of arr) map[num] = (map[num] || 0) + 1;

  let luckyInt = -1;

  for (const key in map) {
    if (Number(key) === map[key]) luckyInt = Math.max(luckyInt, Number(key));
  }

  return luckyInt;
}
