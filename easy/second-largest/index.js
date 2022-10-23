function secondLargest(arr) {
  let max = arr[0];
  let secondMax = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax) secondMax = arr[i];
  }

  return secondMax;
}

console.log(secondLargest([2, 4, 10, 80, 30]));
