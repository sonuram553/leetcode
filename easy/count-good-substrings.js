function countGoodSubstrings(s) {
  const k = 3;
  const map = {};
  let count = 0;
  let unique = 0;

  for (let i = 0; i < k; i++) {
    const ch = s[i];
    if (!(ch in map)) unique++;

    map[ch] = (map[ch] || 0) + 1;
  }

  if (unique === k) count++;

  for (let i = 1; i <= s.length - k; i++) {
    const prevChar = s[i - 1];
    if (map[prevChar] === 1) {
      delete map[prevChar];
      unique--;
    } else if (map[prevChar] > 1) map[prevChar]--;

    const nextChar = s[i + 2];
    if (nextChar in map) map[nextChar]++;
    else {
      map[nextChar] = 1;
      unique++;
    }

    if (unique === k) count++;
  }

  return count;
}
