function findLUSlength(a, b) {
  if (a === b) return -1;

  const n = a.length;
  const m = b.length;

  if (n === m) return n;
  return n > m ? n : m;
}

// One Line Solution
function findLUSlength(a, b) {
  return a === b ? -1 : Math.max(a.length, b.length);
}
