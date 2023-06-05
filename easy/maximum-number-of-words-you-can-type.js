function canBeTypedWords(text, brokenLetters) {
  let i = 0;
  let count = 0;
  const size = text.length;
  const set = new Set(brokenLetters);

  while (i < size) {
    const ch = text[i];

    if (set.has(ch)) {
      while (text[i++] !== " " && i < size);
    } else {
      if (ch === " " || i === size - 1) count++;
      i++;
    }
  }

  return count;
}
