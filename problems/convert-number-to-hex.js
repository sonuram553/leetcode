// Convert a Number to Hexadecimal

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

function decimalToBinary(num) {
  const result = [];

  while (num) {
    result.push(num % 2);
    num = Math.floor(num / 2);
  }

  return reverseArray(result);
}

function twosComplement(binary, size) {
  let result = [];

  for (let i = 0; i + binary.length < size; i++) {
    result.push(0);
  }

  result = [...result, ...binary];

  // Inverse bits
  result.forEach((bit, index) => {
    if (bit === 0) result[index] = 1;
    else result[index] = 0;
  });

  // Add one
  let carry = 0;
  for (let i = result.length - 1; i >= 0; i--) {
    const bit = result[i];

    if (i === result.length - 1) {
      if (bit === 1) {
        result[i] = 0;
        carry = 1;
      } else {
        result[i] = 1;
        carry = 0;
      }
    } else {
      if (bit === 1 && carry === 1) {
        result[i] = 0;
        carry = 1;
      } else if (bit === 0 && carry === 0) {
        result[i] = 0;
        carry = 0;
      } else {
        result[i] = 1;
        carry = 0;
      }
    }
  }

  return result;
}

function toHex(num) {
  if (num >= 0 && num <= 9) return num.toString();

  const binaryToHexMap = {
    "0000": "0",
    "0001": "1",
    "0010": "2",
    "0011": "3",
    "0100": "4",

    "0101": "5",
    "0110": "6",
    "0111": "7",
    1000: "8",
    1001: "9",

    1010: "a",
    1011: "b",
    1100: "c",
    1101: "d",
    1110: "e",
    1111: "f",
  };

  let binary;
  let fourBits = "";
  let hexValue = "";

  if (num >= 0) binary = decimalToBinary(num);
  else binary = twosComplement(decimalToBinary(-num), 32);

  for (let i = binary.length - 1; i >= 0; i--) {
    const bit = binary[i];

    if (fourBits.length < 4) {
      fourBits = bit + fourBits;
    }

    if (fourBits.length === 4) {
      hexValue = binaryToHexMap[fourBits] + hexValue;
      fourBits = "";
    } else if (i === 0) {
      // Since we don't have a set of four bits hence add zeroes in the beginning.
      const size = fourBits.length;
      for (let i = 0; i + size < 4; i++) {
        fourBits = "0" + fourBits;
      }
      hexValue = binaryToHexMap[fourBits] + hexValue;
      fourBits = "";
    }
  }

  return hexValue;
}
