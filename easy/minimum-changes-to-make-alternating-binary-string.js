function minOperations(s) {
  let ops = 0;
  const n = s.length;

  // Make first char 1
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (i & 1) {
      if (ch !== "0") ops++;
    } else {
      if (ch !== "1") ops++;
    }
  }

  const min = ops;
  ops = 0;

  // Make first char 0
  for (let i = 0; i < n; i++) {
    const ch = s[i];
    if (i & 1) {
      if (ch !== "1") ops++;
    } else {
      if (ch !== "0") ops++;
    }
  }

  return Math.min(min, ops);
}
