function countPoints(rings) {
  const map = {};

  for (let i = 1; i < rings.length; i += 2) {
    const ring = rings[i];
    const color = rings[i - 1];

    if (ring in map) {
      map[ring][color] = true;
    } else {
      map[ring] = { [color]: true };
    }
  }

  let count = 0;

  for (const ring in map) {
    if (map[ring].R && map[ring].G && map[ring].B) count++;
  }

  return count;
}
