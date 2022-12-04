function arithmeticTriplets(nums, diff) {
  let count = 0;
  let i = 0;

  while (i < nums.length - 2) {
    let j = i + 1;

    // Num at i can't be part of a triplet
    if (isDiffGreater(nums, i, j, diff)) {
      i++;
      continue;
    }

    while (j < nums.length - 1) {
      if (isValidPair(nums, i, j, diff) || isDiffGreater(nums, i, j, diff))
        break;
      j++;
    }

    if (isValidPair(nums, i, j, diff)) {
      let k = j + 1;

      while (k < nums.length) {
        if (isValidPair(nums, j, k, diff)) {
          count++;
          break;
        }

        if (isDiffGreater(nums, j, k, diff)) break;
        k++;
      }
    }

    i++;
  }

  return count;
}

function isDiffGreater(arr, i, j, diff) {
  return arr[j] > arr[i] + diff;
}

function isValidPair(arr, i, j, diff) {
  return arr[j] === arr[i] + diff;
}
