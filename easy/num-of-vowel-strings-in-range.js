function vowelStrings(words, left, right) {
  let count = 0;
  const vowelSet = new Set("aeiou");

  for (let i = left; i <= right; i++) {
    const word = words[i];

    if (vowelSet.has(word[0]) && vowelSet.has(word[word.length - 1])) count++;
  }

  return count;
}
