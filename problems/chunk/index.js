// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunks = [];
  let i = 0;

  while (i < array.length) chunks.push(array.slice(i, (i += size)));

  return chunks;
}

module.exports = chunk;

/* function chunk(array, size) {
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
} */

/* function chunk(array, size) {
  const chunks = [];
  let temp = [],
    count = 1;

  for (let item of array) {
    temp.push(item);

    if (count % size === 0) {
      chunks.push(temp);
      temp = [];
    } else if (count === array.length) {
      chunks.push(temp);
    }
    count++;
  }

  return chunks;
} */
