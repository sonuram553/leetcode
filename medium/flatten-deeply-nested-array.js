function flat(arr, n) {
  const result = [];

  function flattening(nums, l) {
    for (const num of nums) {
      if (Array.isArray(num) && l > 0) flattening(num, l - 1);
      else result.push(num);
    }
  }

  flattening(arr, n);

  return result;
}
