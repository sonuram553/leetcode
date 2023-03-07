function subsetXORSum(nums) {
  function subsets(arr, sub, index) {
    sum += xorArray(sub);

    for (let i = index; i < arr.length; i++) {
      sub.push(arr[i]);
      subsets(arr, sub, i + 1);
      sub.pop();
    }
  }

  function xorArray(arr) {
    if (!arr.length) return 0;
    return arr.reduce((acc, num) => num ^ acc);
  }

  let sum = 0;
  subsets(nums, [], 0);
  return sum;
}
