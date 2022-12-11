// Find Smallest Letter Greater Than Target

function nextGreatestLetter(letters, target) {
  let start = 0;
  let end = letters.length - 1;
  let nextGreatest = letters[0];

  while (start <= end) {
    const mid = (start + end) >>> 1;
    const code = letters[mid].charCodeAt(0);

    if (code > target.charCodeAt(0)) {
      nextGreatest = letters[mid];
      end = mid - 1;
    } else start = mid + 1;
  }

  return nextGreatest;
}
