function shortestToChar(s, c) {
  const ans = [];
  let prev = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) prev = i;
    ans[i] = i - prev;
  }

  prev = Number.MAX_SAFE_INTEGER;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) prev = i;
    ans[i] = Math.min(ans[i], prev - i);
  }

  return ans;
}
