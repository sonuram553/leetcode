const nums = [2, 2, 2, 2, 3],
  key = 2,
  map = {};

for (let i = 1; i < nums.length; i++) {
  if (nums[i - 1] === key) {
    const val = nums[i];
    map[val] = (map[val] && map[val] + 1) || 1;
  }
}

let max = 0;
let target;
for (let key in map) {
  if (map[key] > max) {
    max = map[key];
    target = key;
  }
}

console.log(target);
