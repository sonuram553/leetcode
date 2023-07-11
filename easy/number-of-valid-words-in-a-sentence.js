export function countValidWords(sentence) {
  let i = 0;
  let count = 0;
  let hyphenCount = 0;
  const n = sentence.length;
  const punctuations = ",.!";

  // Skip leading spaces
  while (i < n && sentence[i] === " ") i++;

  while (i < n) {
    const ch = sentence[i];

    if (punctuations.includes(ch)) {
      if (i === n - 1) count++;
      else if (sentence[i + 1] === " ") {
        i++;
        count++;
      } else {
        while (i < n && sentence[i] !== " ") i++;
      }
      hyphenCount = 0;
    } else if (isNum(ch)) {
      while (i < n && sentence[i] !== " ") i++;
      hyphenCount = 0;
    } else if (ch === "-") {
      if (
        i > 0 &&
        i < n - 1 &&
        isLowerCase(sentence[i - 1]) &&
        isLowerCase(sentence[i + 1]) &&
        hyphenCount === 0
      )
        hyphenCount++;
      else {
        while (i < n && sentence[i] !== " ") i++;
        hyphenCount = 0;
      }
    } else if (ch === " " && sentence[i - 1] !== " ") {
      count++;
      hyphenCount = 0;
    } else if (i === n - 1 && ch !== " ") count++;

    i++;
  }

  return count;
}

function isNum(ch) {
  const code = ch.charCodeAt(0);
  return code >= 48 && code <= 57;
}

function isLowerCase(ch) {
  const code = ch.charCodeAt(0);
  return code >= 97 && code <= 122;
}
