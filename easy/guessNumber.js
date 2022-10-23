// Guess Number Higher or Low

function guess(n) {}

function guessNumber(n) {
  let low = 1;
  let high = n;

  while (low <= high) {
    const mid = (low + high) >>> 1;
    const result = guess(mid);

    if (result === 0) return mid;

    if (result === -1) high = mid - 1;
    else low = mid + 1;
  }
}
