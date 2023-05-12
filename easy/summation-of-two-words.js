function isSumEqual(firstWord, secondWord, targetWord) {
  return (
    stringToNum(firstWord) + stringToNum(secondWord) === stringToNum(targetWord)
  );
}

function stringToNum(str) {
  let num = 0;

  for (const ch of str) {
    const digit = ch.charCodeAt(0) - 97;
    num = num * 10 + digit;
  }

  return num;
}
