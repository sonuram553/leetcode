function hasGroupsSizeX(deck) {
  const map = {};
  for (const num of deck) map[num] = (map[num] || 0) + 1;

  const counts = Object.values(map);
  if (counts.length === 1) return counts[0] > 1;

  let value = gcd(counts[0], counts[1]);
  for (let i = 2; i < counts.length; i++) value = gcd(value, counts[i]);
  return value !== 1;
}

function gcd(a, b) {
  if (a % b === 0) return b;
  return gcd(b, a % b);
}
