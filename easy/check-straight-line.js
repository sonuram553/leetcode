function checkStraightLine(coordinates) {
  const dx = coordinates[0][0] - coordinates[1][0];
  const dy = coordinates[0][1] - coordinates[1][1];

  for (let i = 2; i < coordinates.length; i++) {
    const dx1 = coordinates[0][0] - coordinates[i][0];
    const dy1 = coordinates[0][1] - coordinates[i][1];

    if (dx1 * dy !== dx * dy1) return false;
  }

  return true;
}
