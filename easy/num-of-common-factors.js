function commonFactors(a, b) {
  if (a === 1 || b === 1) return 1;

  const smaller = Math.min(a, b);
  const larger = Math.max(a, b);
  const set = new Set();

  for (let i = 2; i * i <= smaller; i++) {
    if (smaller % i === 0) {
      set.add(i);
      if (i * i !== smaller) set.add(smaller / i);
    }
  }

  if (smaller === larger || larger % smaller === 0) return set.size + 2;

  let count = 1;

  for (let i = 2; i * i <= larger; i++) {
    if (larger % i === 0) {
      if (set.has(i)) count++;

      if (i * i !== larger && set.has(larger / i)) count++;
    }
  }

  return count;
}
