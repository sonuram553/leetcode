function canConstruct(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const map = {};

  for (const ch of ransomNote) {
    map[ch] = (map[ch] || 0) + 1;
  }

  for (const ch of magazine) {
    if (map[ch]) {
      map[ch]--;
    }
  }

  for (const key in map) {
    if (map[key] !== 0) return false;
  }

  return true;
}

console.log(canConstruct("aa", "aab"));
