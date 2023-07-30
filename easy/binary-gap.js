function binaryGap(n) {
  let i = 0;
  let maxDist = 0;
  let lastIndex = -1;

  while (n) {
    const bit = n % 2;
    n = Math.floor(n / 2);
    if (bit) {
      if (lastIndex === -1) lastIndex = i;
      else {
        maxDist = Math.max(maxDist, i - lastIndex);
        lastIndex = i;
      }
    }
    i++;
  }

  return maxDist;
}
