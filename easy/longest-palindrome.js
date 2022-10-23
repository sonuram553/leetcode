function longestPalindrome(str) {
  const map = {};
  for (const ch of str) {
    map[ch] = (map[ch] || 0) + 1;
  }

  let size = 0;

  for (const [_, count] of Object.entries(map)) {
    size += Math.floor(count / 2) * 2;
    if (size % 2 === 0 && count % 2 === 1) {
      // Executes only once
      size++;
    }
  }

  return size;
}
