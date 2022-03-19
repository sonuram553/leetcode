const nums = [3, 4, 9, 1, 3, 9, 5],
  key = 9,
  k = 1,
  keyIndices = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === key) {
    keyIndices.push(i);
  }
}

const indices = [];
for (let i = 0; i < nums.length; i++) {
  for (let index of keyIndices) {
    if (Math.abs(i - index) <= k) {
      indices.push(i);
      break;
    }
  }
}

console.log(keyIndices, indices);
