/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
  let i = 0;
  let line = [];
  let length = 0;
  const result = [];

  while (i < words.length) {
    const word = words[i];

    if (length + line.length + word.length > maxWidth) {
      const emptySlots = Math.max(line.length - 1, 1);
      const totalSpaces = maxWidth - length;
      const spacesPerSlot = Math.floor(totalSpaces / emptySlots);
      let remainder = totalSpaces % emptySlots;

      for (let j = 0; j < Math.max(line.length - 1, 1); j++) {
        line[j] += " ".repeat(spacesPerSlot);
        if (remainder) {
          line[j] += " ";
          remainder--;
        }
      }

      result.push(line.join(""));
      line = [];
      length = 0;
    }

    line.push(word);
    length += word.length;
    i++;
  }

  // Handle last line
  const lastLine = line.join(" ");
  const totalSpaces = maxWidth - lastLine.length;
  result.push(lastLine + " ".repeat(totalSpaces));

  return result;
};
