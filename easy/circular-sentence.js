function isCircularSentence(sentence) {
  let i = 0;

  while (i < sentence.length) {
    const ch = sentence[i];

    if (ch === " ") {
      if (sentence[i - 1] !== sentence[i + 1]) return false;
    }

    i++;
  }

  return sentence[0] === sentence[i - 1];
}
