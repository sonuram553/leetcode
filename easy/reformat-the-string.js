function reformat(str) {
  let alphabetsCount = 0;

  for (const ch of str) {
    if (isAlphabet(ch)) alphabetsCount++;
  }

  const digitsCount = str.length - alphabetsCount;

  if (
    alphabetsCount === digitsCount ||
    alphabetsCount + 1 === digitsCount ||
    alphabetsCount === digitsCount + 1
  ) {
    let i = 0;
    let j = 0;
    const n = str.length;
    let formatted = "";

    while (i < n || j < n) {
      if (alphabetsCount >= digitsCount) {
        // Track alphabets first
        while (i < n && !isAlphabet(str[i])) {
          i++;
        }
        if (i < n) formatted += str[i++];

        // Track digits
        while (j < n && !isDigit(str[j])) {
          j++;
        }
        if (j < n) formatted += str[j++];
      } else {
        // Track digits first
        while (j < n && !isDigit(str[j])) {
          j++;
        }
        if (j < n) formatted += str[j++];

        // Track alphabets first
        while (i < n && !isAlphabet(str[i])) {
          i++;
        }
        if (i < n) formatted += str[i++];
      }
    }

    return formatted;
  }

  return "";
}

function isAlphabet(ch) {
  const code = ch.charCodeAt(0);
  return code >= 97 && code <= 122;
}

function isDigit(ch) {
  const code = ch.charCodeAt(0);
  return code >= 48 && code <= 57;
}
