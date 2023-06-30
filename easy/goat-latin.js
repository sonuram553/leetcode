function toGoatLatin(sentence) {
  let add = "a";
  let newSentence = "";
  let suffix = "ma" + add;
  const n = sentence.length;
  const vowel = new Set("aeiouAEIOU");

  let i = 0;
  if (!vowel.has(sentence[i])) {
    suffix = sentence[i] + suffix;
    i++;
  }

  while (i < n) {
    if (sentence[i] === " ") {
      // End of a word
      newSentence += suffix + " ";
      add += "a";

      // Start of a word
      i++;
      suffix = "ma" + add;
      if (!vowel.has(sentence[i])) {
        suffix = sentence[i] + suffix;
        i++;
      }
    } else {
      newSentence += sentence[i];
      i++;
    }
  }

  return newSentence + suffix;
}
