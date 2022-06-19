function isPerfectSquare(num) {
  let low = 1;
  let high = num;

  while (low <= high) {
    const mid = (low + high) >>> 1;

    if (mid * mid === num) return true;

    if (mid * mid < num) low = mid + 1;
    else high = mid - 1;
  }

  return false;
}
