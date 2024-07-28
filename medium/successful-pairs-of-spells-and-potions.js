/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  potions.sort((a, b) => a - b);

  for (let i = 0; i < spells.length; i++) {
    const key = Math.ceil(success / spells[i]);
    const index = binarySearch(potions, key);
    spells[i] = index === -1 ? 0 : potions.length - index;
  }

  return spells;
};

function binarySearch(arr, key) {
  if (key < arr[0]) return 0;
  if (key > arr[arr.length - 1]) return -1;

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = (start + end) >>> 1;

    if (arr[mid] === key) {
      if (mid === 0) return 0;
      if (arr[mid - 1] !== key) return mid;
      end = mid;
    } else if (arr[mid] > key) {
      if (mid === 0) return 0;
      if (arr[mid - 1] < key) return mid;
      end = mid - 1;
    } else start = mid + 1;
  }
}
