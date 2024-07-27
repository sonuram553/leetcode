function guessNumber(n) {
  let low = 1;
  let high = n;

  while (true) {
    const mid = (low + high) >>> 1;
    const result = guess(mid);

    if (result === 0) return mid;

    if (result === -1) high = mid - 1;
    else low = mid + 1;
  }
}
