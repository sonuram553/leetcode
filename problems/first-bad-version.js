function isBadVersion(n) {}

function firstBadVersion(n) {
  let start = 1;
  let end = n;
  let bad;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (isBadVersion(mid)) {
      bad = mid;
      end = mid - 1;
    } else start = mid + 1;
  }

  return bad;
}
