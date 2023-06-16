function buddyStrings(s, goal) {
  if (s.length !== goal.length) return false;

  if (s === goal) {
    const map = {};
    for (const ch of s) {
      map[ch] = (map[ch] || 0) + 1;
      if (map[ch] === 2) return true;
    }
    return false;
  }

  let firstIndex = -1;
  let secondIndex = -1;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) {
      if (firstIndex === -1) firstIndex = i;
      else if (secondIndex === -1) secondIndex = i;
      else return false;
    }
  }

  if (secondIndex === -1) return false;

  return (
    s[firstIndex] === goal[secondIndex] && s[secondIndex] === goal[firstIndex]
  );
}

function getCharMap(str) {
  const map = {};
  for (const ch of str) {
    map[ch] = (map[ch] || 0) + 1;
  }
  return map;
}
