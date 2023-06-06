function similarPairs(words) {
  let count = 0;
  const n = words.length;

  for (let i = 0; i < n - 1; i++) {
    const charSet = new Set(words[i]);

    for (let j = i + 1; j < n; j++) {
      if (isEqual(charSet, new Set(words[j]))) count++;
    }
  }

  function isEqual(set1, set2) {
    for (const item of set1) {
      if (!set2.has(item)) return false;
    }

    for (const item of set2) {
      if (!set1.has(item)) return false;
    }

    return true;
  }

  return count;
}
