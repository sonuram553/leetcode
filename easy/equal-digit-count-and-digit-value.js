function digitCount(num) {
  const map = {};
  for (const digit of num) map[digit] = (map[digit] || 0) + 1;

  for (const key in map) {
    const index = Number(key);
    if (map[key] !== Number(num[index])) return false;
  }

  return true;
}
