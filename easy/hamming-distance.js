function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const left = arr[start];
    arr[start] = arr[end];
    arr[end] = left;

    start++;
    end--;
  }

  return arr;
}

function intToBinary(num) {
  const result = [];

  while (num) {
    result.push(num % 2);
    num = Math.floor(num / 2);
  }

  return reverseArray(result);
}

function hammingDistance(x, y) {
  let _hammingDistance = 0;
  const binaryX = intToBinary(x);
  const binaryY = intToBinary(y);

  let maxLengthBinary, minLengthBinary;

  if (binaryX.length > binaryY.length) {
    maxLengthBinary = binaryX;
    minLengthBinary = binaryY;
  } else {
    maxLengthBinary = binaryY;
    minLengthBinary = binaryX;
  }

  // Traverse the number with maximum binary first
  let i = 0;
  while (i < maxLengthBinary.length - minLengthBinary.length) {
    if (maxLengthBinary[i] === 1) _hammingDistance++;

    i++;
  }

  // Now compare both number's binary
  let j = 0;
  while (i < maxLengthBinary.length && j < minLengthBinary.length) {
    if (maxLengthBinary[i] !== minLengthBinary[j]) _hammingDistance++;

    i++;
    j++;
  }

  return _hammingDistance;
}
