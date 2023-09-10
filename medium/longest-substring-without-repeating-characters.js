function lengthOfLongestSubstring(s) {
  let res = 0;
  let left = 0;
  const set = new Set();

  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[left]);
      left++;
    }

    set.add(s[r]);
    res = Math.max(res, r - left + 1);
  }

  return res;
}
