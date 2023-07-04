function maxScore(s) {
  let onesCount = 0;

  for (const ch of s) {
    if (ch === "1") onesCount++;
  }

  let score = 0;
  let zeroesCount = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") zeroesCount++;
    else onesCount--;
    score = Math.max(score, zeroesCount + onesCount);
  }

  return score;
}
