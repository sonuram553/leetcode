function isPathCrossing(path) {
  let currentX = 0;
  let currentY = 0;
  const visitedNodes = new Set();

  visitedNodes.add(`${currentX},${currentY}`);

  for (const direction of path) {
    switch (direction) {
      case "N":
        currentY++;
        break;

      case "S":
        currentY--;
        break;

      case "E":
        currentX++;
        break;

      case "W":
        currentX--;
        break;
    }

    const node = `${currentX},${currentY}`;
    if (visitedNodes.has(node)) return true;
    visitedNodes.add(node);
  }

  return false;
}
