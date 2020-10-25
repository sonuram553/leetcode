// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Main Solution
function chunkWithForOfLoop(array, size) {
  const chunks = [];

  for (let item of array) {
    const lastChunk = chunks[chunks.length - 1];

    if (!lastChunk || lastChunk.length === size) {
      chunks.push([item]);
    } else {
      lastChunk.push(item);
    }
  }

  return chunks;
}

// Alternate Solutions
function chunkWithArraySlice(array, size) {
  const chunks = [];
  let i = 0;

  while (i < array.length) chunks.push(array.slice(i, (i += size)));

  return chunks;
}

function chunkWithForLoop(array, size) {
  const chunks = [];
  let temp = [];

  for (let i = 0; i < array.length; i++) {
    temp.push(array[i]);

    if ((i + 1) % size === 0) {
      chunks.push(temp);
      temp = [];
    } else if (i + 1 === array.length) {
      chunks.push(temp);
    }
  }

  return chunks;
}

module.exports = chunkWithForOfLoop;
