function isLongPressedName(name, typed) {
  let i = 0;
  let j = 0;

  while (i < name.length && j < typed.length) {
    if (name[i] !== typed[j]) return false;

    let countNameChar = 1;
    let countTypedChar = 1;

    while (name[i] === name[i + 1]) {
      i++;
      countNameChar++;
    }

    while (typed[j] === typed[j + 1]) {
      j++;
      countTypedChar++;
    }

    if (countTypedChar < countNameChar) return false;

    i++;
    j++;
  }

  return i === name.length && j === typed.length;
}
