// Time Complexity O(n^2)

function duplicateZeros(arr) {
  const n = arr.length;
  let i = 0;

  while (i < n) {
    if (arr[i] !== 0) {
      i++;
      continue;
    }

    let count = 1;

    // Count consecutive zeros
    while (arr[i + 1] === 0) {
      i++;
      count++;
    }

    // Shift numbers toward right
    i++;
    let j = n - 1;

    while (j - count >= i) {
      arr[j] = arr[j - count];
      j--;
    }

    // Duplicate zeros
    while (i < n && count > 0) {
      arr[i++] = 0;
      count--;
    }
  }
}
