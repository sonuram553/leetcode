function rearrangeCharacters(str, target) {
  if (str.length < target.length) return 0;

  const targetMap = {};
  for (const ch of target) targetMap[ch] = (targetMap[ch] || 0) + 1;

  const strMap = {};
  for (const ch of str) strMap[ch] = (strMap[ch] || 0) + 1;

  // Check whether str contains all the characters from the target
  for (const ch in targetMap) {
    if (!strMap[ch]) return 0;
  }

  let count = Number.MAX_VALUE;
  for (const ch in strMap) {
    if (ch in targetMap) {
      count = Math.min(count, Math.floor(strMap[ch] / targetMap[ch]));
    }
  }

  return count;
}
