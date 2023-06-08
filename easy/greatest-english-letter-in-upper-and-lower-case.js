function greatestLetter(s) {
  let letter = "";
  const set = new Set(s[0]);

  for (let i = 1; i < s.length; i++) {
    const ch = s[i];

    if (
      (isUpperCase(ch) && set.has(ch.toLowerCase())) ||
      (isLowerCase(ch) && set.has(ch.toUpperCase()))
    ) {
      const upperCasedCh = ch.toUpperCase();
      if (letter) {
        if (upperCasedCh.charCodeAt(0) > letter.charCodeAt(0))
          letter = upperCasedCh;
      } else letter = upperCasedCh;
      continue;
    }

    set.add(ch);
  }

  return letter;
}

function isUpperCase(ch) {
  return ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90;
}

function isLowerCase(ch) {
  return ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122;
}
