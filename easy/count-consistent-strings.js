function countConsistentStrings(allowed, words) {
  const set = new Set(allowed);

  return words.reduce((count, word) => {
    let isConsistent = true;

    for (const ch of word) {
      if (!set.has(ch)) {
        isConsistent = false;
        break;
      }
    }

    return isConsistent ? count + 1 : count;
  }, 0);
}
