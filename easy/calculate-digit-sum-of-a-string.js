function digitSum(s, k) {
  while (s.length > k) {
    let sum = 0;
    let current = "";
    const n = s.length;

    // current will store string representing sum of a group of digits of size k or less
    for (let i = 0; i < n; i++) {
      sum += Number(s[i]);

      if ((i + 1) % k === 0 || i === n - 1) {
        current += String(sum);
        sum = 0;
      }
    }

    s = current;
  }

  return s;
}
