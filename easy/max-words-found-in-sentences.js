function mostWordsFound(sentences) {
  let max = countWords(sentences[0]);

  for (let i = 1; i < sentences.length; i++) {
    max = Math.max(countWords(sentences[i]), max);
  }

  return max;
}

function countWords(str) {
  let count = 0;

  for (const ch of str) {
    if (ch === " ") count++;
  }

  return count + 1;
}
