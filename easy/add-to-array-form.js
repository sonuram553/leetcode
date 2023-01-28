function addToArrayForm(num, k) {
  return intToArray(arrayToInt(num) + BigInt(k));
}

function arrayToInt(arr) {
  let num = BigInt(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    num = num * 10n + BigInt(arr[i]);
  }

  return num;
}

function intToArray(num) {
  // num is a BigInt

  if (num === 0n) return [0];

  const arr = [];

  while (num) {
    const mod = num % 10n;
    arr.push(Number(mod.toString()));
    num = num / 10n;
  }

  return arr.reverse();
}

// Schoolbook Addition
// Time Complexity: O(max⁡(N,log⁡K)) where N is the length of A.
// Space Complexity: O(max⁡(N,log⁡K)).

function addToArrayForm(num, k) {
  let cur = k;
  let i = num.length;
  const result = [];

  while (--i >= 0 || cur > 0) {
    if (i >= 0) cur += num[i];

    result.push(cur % 10);
    cur = Math.floor(cur / 10);
  }

  return result.reverse();
}
