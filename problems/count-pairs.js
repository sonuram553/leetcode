const nums = [1, 2, 3, 4],
  k = 1;

let count = 0;

for (let i = 0; i < nums.length - 1; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] === nums[j] && (i * j) % k === 0) {
      count += 1;
    }
  }
}

console.log(count);
