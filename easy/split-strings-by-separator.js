function splitWordsBySeparator(words, separator) {
  const result = [];

  words.forEach((str) => {
    let word = "";
    for (const ch of str) {
      if (ch === separator) {
        if (word) result.push(word);
        word = "";
      } else word += ch;
    }
    if (word) result.push(word);
  });

  return result;
}
