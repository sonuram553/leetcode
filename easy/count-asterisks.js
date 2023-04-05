function countAsterisks(s) {
  let count = 0;
  let barCount = 0;

  for (const ch of s) {
    if (ch === "*") {
      if (barCount === 0) count++;
    } else if (ch === "|") {
      if (barCount === 1) barCount = 0;
      else barCount++;
    }
  }

  return count;
}
