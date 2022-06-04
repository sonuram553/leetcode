function thirdMax(arr) {
  let max = arr[0];
  let second, third;

  for (let i = 1; i < arr.length; i++) {
    if ([max, second, third].includes(arr[i])) continue;

    if (arr[i] > max) {
      third = second;
      second = max;
      max = arr[i];
    } else if (second === undefined) {
      second = arr[i];
    } else if (arr[i] > second) {
      third = second;
      second = arr[i];
    } else if (third === undefined) {
      third = arr[i];
    } else if (arr[i] > third) {
      third = arr[i];
    }
  }

  if (third === undefined) return max;
  return third;
}

console.log(thirdMax([1, 2, 3]));
