function numOfStrings(patterns, word) {
  return patterns.reduce((count, pat) => {
    if (word.includes(pat)) return count + 1;
    return count;
  }, 0);
}
