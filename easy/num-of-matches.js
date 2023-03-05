function numberOfMatches(n) {
  if (n < 2) return 0;

  let matchesPlayed = 0;

  while (n !== 1) {
    let matches;

    if (n & 1) {
      matches = (n - 1) / 2;
      n = matches + 1;
    } else n = matches = n >>> 1;

    matchesPlayed += matches;
  }

  return matchesPlayed;
}
