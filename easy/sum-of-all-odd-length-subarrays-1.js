// Time Complexity O(n^2)

function sumOddLengthSubarrays(arr) {
  let totalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = i; j < arr.length; j++) {
      sum += arr[j];

      // Found odd length subarray
      if ((j - i + 1) % 2 !== 0) totalSum += sum;
    }
  }

  return totalSum;
}


