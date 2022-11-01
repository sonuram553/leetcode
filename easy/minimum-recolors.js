function minimumRecolors(blocks, k) {
  let maxBCount = 0;

  for (let i = 0; i < k; i++) {
    if (blocks[i] === "B") maxBCount++;
  }

  if (maxBCount === k) return 0;

  let count = maxBCount;
  for (let i = 1; i <= blocks.length - k; i++) {
    if (blocks[i - 1] === "B") count--;
    if (blocks[i + k - 1] === "B") count++;

    if (count === k) return 0;
    maxBCount = Math.max(maxBCount, count);
  }

  return k - maxBCount;
}
