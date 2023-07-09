function reorderSpaces(text) {
  let i = 0;
  let wordsCount = 0;
  let spacesCount = 0;
  const n = text.length;

  // Count spaces and words
  while (i < n) {
    if (text[i] === " ") {
      spacesCount++;
      i++;
    } else {
      wordsCount++;
      while (i < n && text[i] !== " ") i++;
    }
  }

  i = 0;
  let j = 0; // To track word counts
  let rearranged = "";
  const evenSpaces = Math.floor(spacesCount / (wordsCount - 1));

  // Distribute spaces
  while (i < n) {
    if (text[i] === " ") i++;
    else {
      while (i < n && text[i] !== " ") {
        rearranged += text[i];
        i++;
      }
      j++;
      if (wordsCount === 1) rearranged = addSpaces(rearranged, spacesCount);
      else if (j === wordsCount)
        rearranged = addSpaces(rearranged, spacesCount % (wordsCount - 1));
      else rearranged = addSpaces(rearranged, evenSpaces);
    }
  }

  return rearranged;
}

function addSpaces(text, k) {
  for (let i = 0; i < k; i++) text += " ";
  return text;
}
