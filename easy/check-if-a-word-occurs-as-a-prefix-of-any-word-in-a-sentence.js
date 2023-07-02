function isPrefixOfWord(sentence, searchWord) {
  let i = 0;
  let j = 0;
  let wordIndex = 1;
  const n = sentence.length;
  const size = searchWord.length;

  while (i < n) {
    const ch = sentence[i];
    if (ch === " ") {
      j = 0;
      i++;
      wordIndex++;
    } else if (ch !== searchWord[j]) {
      j = 0;
      i++;

      while (i < n && sentence[i] !== " ") i++;
    } else {
      i++;
      j++;
    }

    if (j === size) return wordIndex;
  }

  return -1;
}
