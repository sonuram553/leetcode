// Time Complexity O(L)
// Space Complexity O(1)
// L is the length of the number

function maximum69Number(num) {
  let i = 0;
  let numCopy = num;
  let lastIndexOf6 = -1;

  while (numCopy) {
    if (numCopy % 10 === 6) lastIndexOf6 = i;
    numCopy = Math.floor(numCopy / 10);
    i++;
  }

  if (lastIndexOf6 === -1) return num;
  return num + 3 * 10 ** lastIndexOf6;
}
