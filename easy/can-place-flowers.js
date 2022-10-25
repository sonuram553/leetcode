function canPlaceFlowers(flowerbed, n) {
  const size = flowerbed.length;

  for (let i = 0; i < size; i++) {
    // If all flowers are placed.
    if (n === 0) return true;

    const place = flowerbed[i];

    if (place === 0) {
      if (
        (i !== 0 && flowerbed[i - 1] === 1) ||
        (i !== size - 1 && flowerbed[i + 1] === 1)
      ) {
        // Do nothing if adjacent is 1.
      } else {
        flowerbed[i] = 1;
        n--;
      }
    }
  }

  return n === 0;
}
