function countVowelSubstrings(word) {
  const n = word.length;
  const vowelSet = new Set("aeiou");

  let i = 0;
  let count = 0;

  while (i < n) {
    const ch = word[i];

    if (vowelSet.has(ch)) {
      let j = i + 1;
      const currentVowelSet = new Set(ch);

      while (j < n && vowelSet.has(word[j])) {
        currentVowelSet.add(word[j]);
        if (currentVowelSet.size === 5) count++;
        j++;
      }
    }

    i++;
  }

  return count;
}
