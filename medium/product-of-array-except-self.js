// With division operation
function productExceptSelf(nums) {
  let product = 1;
  let zeroCount = 0;
  const n = nums.length;

  for (const num of nums) {
    if (num === 0) {
      zeroCount++;
      if (zeroCount === 2) {
        for (let i = 0; i < n; i++) {
          nums[i] = 0;
        }
        return nums;
      }
    } else product *= num;
  }

  if (zeroCount === 1) {
    for (let i = 0; i < n; i++) {
      if (nums[i] === 0) nums[i] = product;
      else nums[i] = 0;
    }
  } else {
    for (let i = 0; i < n; i++) {
      nums[i] = product / nums[i];
    }
  }

  return nums;
}

// Without division operation
function productExceptSelf(nums) {
  const n = nums.length;
  const left = new Array(n);
  const right = new Array(n);
  const result = new Array(n);

  left[0] = nums[0];
  right[n - 1] = nums[n - 1];

  for (let i = 1; i < n; i++) {
    left[i] = nums[i] * left[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    right[i] = nums[i] * right[i + 1];
  }

  for (let i = 0; i < n; i++) {
    if (i === 0) result[i] = right[i + 1];
    else if (i === n - 1) result[i] = left[i - 1];
    else result[i] = left[i - 1] * right[i + 1];
  }

  return result;
}

// Without division operation and using one extra array only
function productExceptSelf(nums) {
  const n = nums.length;
  const result = new Array(n);

  result[0] = nums[0];

  for (let i = 1; i < n; i++) {
    result[i] = nums[i] * result[i - 1];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    if (i === n - 1) result[i] = result[i - 1];
    else if (i === 0) result[i] = rightProduct;
    else result[i] = result[i - 1] * rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}
