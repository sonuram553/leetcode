function maximumNumberOfStringPairs(words) {
  let pairs = 0;
  const set = new Set(words);

  for (const word of words) {
    const reversed = reverse(word);
    if (word !== reversed && set.has(reversed)) {
      pairs++;
      set.delete(word);
      set.delete(reversed);
    }
  }

  return pairs;
}

function reverse(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
