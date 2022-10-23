function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] <= arr[j + 1]) continue;
      const temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }

  return arr;
}

// Optimized version of bubbleSort
/* function bubbleSort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let isSwap = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwap = true;
      }
    }

    if (!isSwap) break;
  }

  return arr;
} */

function selectionSort(arr) {
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

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentVal = arr[i];

    let j = i - 1;
    for (; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
  }

  return arr;
}

module.exports = { bubbleSort, selectionSort, insertionSort };
