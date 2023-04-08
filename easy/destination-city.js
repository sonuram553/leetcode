function destCity(paths) {
  const map = {};

  paths.forEach(([city1, city2]) => {
    map[city1] = city2;
  });

  for (const city in map) {
    if (!(map[city] in map)) return map[city];
  }
}
