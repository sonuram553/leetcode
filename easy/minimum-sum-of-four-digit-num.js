function minimumSum(num) {
  const digits = [];

  while (num) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  bubbleSort(digits);

  // After sorting, sum of the two digits number formed by the digits array indices (03 and 12) will be the minimum.
  return digits[0] * 10 + digits[3] + digits[1] * 10 + digits[2];
}

function bubbleSort(arr) {
  let swapped;
  let indexOfLastUnsortedItem = arr.length - 1;

  do {
    swapped = false;

    for (let i = 0; i <= indexOfLastUnsortedItem; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true;
      }
    }

    indexOfLastUnsortedItem--;
  } while (swapped);

  return arr;
}

function swap(arr, leftIndex, rightIndex) {
  const temp = arr[leftIndex];
  arr[leftIndex] = arr[rightIndex];
  arr[rightIndex] = temp;
}
