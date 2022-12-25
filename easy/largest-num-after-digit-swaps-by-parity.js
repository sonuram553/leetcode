function largestInteger(num) {
  if (num < 10) return num;

  const digits = [];

  // Separate digits
  while (num) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  reverseArray(digits);

  const evenIndices = [];
  const oddIndices = [];
  const evenDigits = [];
  const oddDigits = [];

  // Separate EVEN and ODD digits
  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];

    if (digit % 2) {
      oddIndices.push(i);
      oddDigits.push(digit);
    } else {
      evenIndices.push(i);
      evenDigits.push(digit);
    }
  }

  bubbleSort(evenDigits);
  bubbleSort(oddDigits);

  for (const i of evenIndices) digits[i] = evenDigits.pop();
  for (const i of oddIndices) digits[i] = oddDigits.pop();

  // Generate largest number
  num = digits[0];
  for (let i = 1; i < digits.length; i++) num = num * 10 + digits[i];

  return num;
}

function bubbleSort(arr) {
  let swapped;
  let indexOfLastUnsortedItem = arr.length - 1;

  do {
    swapped = false;

    for (let i = 0; i < indexOfLastUnsortedItem; i++) {
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

function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let left = arr[start];
    arr[start] = arr[end];
    arr[end] = left;

    start++;
    end--;
  }

  return arr;
}
