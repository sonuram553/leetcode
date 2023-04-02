function decodeMessage(key, message) {
  const map = {};
  let index = 0;
  let decodedMsg = "";

  for (const ch of key) {
    if (ch !== " " && !(ch in map)) {
      map[ch] = index++;
    }
  }

  for (const ch of message) {
    if (ch === " ") decodedMsg += " ";
    else decodedMsg += String.fromCharCode(map[ch] + 97);
  }

  return decodedMsg;
}
