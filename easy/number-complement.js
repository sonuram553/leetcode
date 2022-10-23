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
  if (num === 0) return [0];

  const result = [];

  while (num) {
    result.push(num % 2);
    num = Math.floor(num / 2);
  }

  return reverseArray(result);
}

function binaryToInt(binary) {
  return binary.reduce((result, bit) => 2 * result + bit, 0);
}

function findComplement1(num) {
  const binary = intToBinary(num);

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === 0) binary[i] = 1;
    else binary[i] = 0;
  }

  return binaryToInt(binary);
}

// Using XOR
function findComplement(num) {
  const binary = intToBinary(num);
  const maxNum = 2 ** binary.length - 1;
  return num ^ maxNum;
}
