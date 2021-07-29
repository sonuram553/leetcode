// Method 1: Using temp array
function arrayRotate_1(arr, n) {
  const size = arr.length;
  const tempArr = [];

  for (let i = 0; i < n; i++) tempArr.push(arr[i]);
  for (let i = n; i < size; i++) arr[i - n] = arr[i];
  for (let i = size - n; i < size; i++) arr[i] = tempArr.shift();

  return arr;
}

// Method 2: Rotate one by one
function arrayRotate_2(arr, n) {
  for (let i = 0; i < n; i++) leftRotate(arr);
  return arr;
}

function leftRotate(arr) {
  let temp = arr[0];

  for (let i = 0; i < arr.length - 1; i++) arr[i] = arr[i + 1];
  arr[arr.length - 1] = temp;
}

// Method 3: Juggling Algorithm
function arrayRotate_3(arr, n) {
  const size = arr.length;

  for (let i = 0; i < gcd(size, n); i++) {
    const temp = arr[i];
    let j = i;

    while (true) {
      let k = j + n;

      if (k >= size) k = k - size;
      if (k === i) break;

      arr[j] = arr[k];
      j = k;
    }

    arr[j] = temp;
  }

  return arr;
}

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

// Method 3: Reversal Algorithm
function reverseArr(arr, start, end) {
  end = (end && end - 1) || 0;

  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
}

function arrayRotate_4(arr, n) {
  const size = arr.length;
  n = n % size;

  reverseArr(arr, 0, n);
  reverseArr(arr, n, size);
  reverseArr(arr, 0, size);

  return arr;
}

// Method 4: Block Swap Algorithm
function swap(arr, firstIndex, secondIndex, n) {
  for (let i = 0; i < n; i++) {
    const temp = arr[firstIndex + i];
    arr[firstIndex + i] = arr[secondIndex + i];
    arr[secondIndex + i] = temp;
  }
}

function arrayRotate_5(arr, n) {
  const size = arr.length;
  if (!n || n === size) return arr;
  n = n % size;

  let i = n;
  let j = size - n;

  while (i !== j) {
    if (i < j) {
      swap(arr, n - i, n + j - i, i);
      j -= i;
    } else {
      swap(arr, n - i, n, j);
      i -= j;
    }
  }

  swap(arr, n - i, n, i);
}

/* console.log(arrayRotate_1([1, 2, 3, 4, 5, 6, 7], 2));
console.log(arrayRotate_2([1, 2, 3, 4, 5, 6, 7], 2));
console.log(arrayRotate_3([1, 2, 3, 4, 5, 6], 3));
console.log(leftRotate([1, 2, 3, 4, 5, 6, 7]));
console.log(arrayRotate_4([1, 2, 3, 4, 5, 6], 8));
 */
