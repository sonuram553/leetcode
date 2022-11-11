function largestAltitude(gain) {
  let alt = 0;
  let largestAlt = 0;

  for (const g of gain) {
    alt += g;
    largestAlt = Math.max(largestAlt, alt);
  }

  return largestAlt;
}
