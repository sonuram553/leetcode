function countOdds(low, high) {
  let count = 0;

  for (let i = low; i <= high; i++) {
    if (i & 1) count++;
  }

  return count;
}
