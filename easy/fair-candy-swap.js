// Time Complexity O(n^2)
// Space Complexity O(1)

function fairCandySwap(aliceSizes, bobSizes) {
  const aliceCandiesCount = aliceSizes.reduce((sum, size) => sum + size);
  const bobCandiesCount = bobSizes.reduce((sum, size) => sum + size);

  for (const alice of aliceSizes) {
    for (const bob of bobSizes) {
      if (aliceCandiesCount - alice + bob === bobCandiesCount - bob + alice)
        return [alice, bob];
    }
  }
}

// Time Complexity O(n)
// Space Complexity O(n)

function fairCandySwap(aliceSizes, bobSizes) {
  const aliceCandiesCount = aliceSizes.reduce((sum, size) => sum + size);
  const bobCandiesCount = bobSizes.reduce((sum, size) => sum + size);

  const set = new Set(aliceSizes);

  for (const bob of bobSizes) {
    const value = (aliceCandiesCount + 2 * bob - bobCandiesCount) >>> 1;
    if (set.has(value)) return [value, bob];
  }
}
