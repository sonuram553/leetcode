// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] <= arr[j + 1]) continue;
      const temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }

  return arr;
}

function selectionSort(arr) {
  /* for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) continue;
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  } */

  // Alternate solution
  for (let i = 0; i < arr.length - 1; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexOfMin] > arr[j]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      const temp = arr[i];
      arr[i] = arr[indexOfMin];
      arr[indexOfMin] = temp;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

// Other implementation of merge function
/* function merge(left, right) {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  if (i < left.length) {
    result.push(...left.slice(i));
  } else if (j < right.length) {
    result.push(...right.slice(j));
  }

  return result;
} */

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
