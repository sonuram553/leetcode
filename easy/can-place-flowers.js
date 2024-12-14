function canPlaceFlowers(flowerbed, n) {
  const size = flowerbed.length;
  const arr = [0, ...flowerbed, 0];

  for (let i = 1; i <= size; i++) {
    if (arr[i - 1] === 0 && arr[i] === 0 && arr[i + 1] === 0) {
      arr[i] = 1;
      n--;
    }
  }

  return n <= 0;
}
