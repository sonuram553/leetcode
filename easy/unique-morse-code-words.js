const morseCode = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
];

function uniqueMorseRepresentations(words) {
  const set = new Set();
  words.forEach((word) => set.add(convertToMorseCode(word)));
  return set.size;
}

function convertToMorseCode(word) {
  let code = "";

  for (const ch of word) {
    code += morseCode[ch.charCodeAt(0) - 97];
  }

  return code;
}
