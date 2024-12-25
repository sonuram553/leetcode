function maxNumberOfBalloons(text) {
  const balloon = "balon";
  const map = { b: 0, a: 0, l: 0, o: 0, n: 0 };

  for (const ch of text) {
    if (balloon.includes(ch)) map[ch]++;
  }

  let count = text.length;

  for (const ch in map) {
    if ("lo".includes(ch)) count = Math.min(count, map[ch] >>> 1);
    else count = Math.min(count, map[ch]);
  }

  return count;
}
