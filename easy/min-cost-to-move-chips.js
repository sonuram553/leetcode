function minCostToMoveChips(position) {
  let evenCount = 0;

  for (const p of position) {
    if (p % 2 === 0) evenCount++;
  }

  return Math.min(evenCount, position.length - evenCount);
}
