function findTheLongestBalancedSubstring(str) {
  let i = 0;
  const n = str.length;

  // Skip initial ones
  while (i < n && str[i] === "1") i++;
  if (i === n) return 0;

  let longestSubstringLen = 0;

  while (i < n) {
    let zeroesCount = 0;
    let onesCount = 0;

    while (i < n && str[i] === "0") {
      zeroesCount++;
      i++;
    }

    while (i < n && str[i] === "1") {
      onesCount++;
      i++;
    }

    const commonCount = Math.min(zeroesCount, onesCount);
    longestSubstringLen = Math.max(longestSubstringLen, 2 * commonCount);
  }

  return longestSubstringLen;
}
