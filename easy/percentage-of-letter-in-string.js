function percentageLetter(s, letter) {
  let count = 0;

  for (const ch of s) {
    if (ch === letter) count++;
  }

  return Math.round((count * 100) / s.length);
}
