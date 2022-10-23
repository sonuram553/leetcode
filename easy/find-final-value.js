const nums = [8, 19, 2, 4];
let original = 2;

while (true) {
  if (nums.includes(original)) {
    original *= 2;
  } else break;
}

console.log(original);
