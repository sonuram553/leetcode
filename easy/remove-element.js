var removeElement = function (nums, val) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[count] = nums[i];
      count += 1;
    }
  }

  return count;
};

const Tests = [
  [],
  [1],
  [3, 3, 2],
  [2, 2, 2, 2],
  [1, 2, 2, 2],
  [1, 5, 3, 4],
  [0, 1, 2, 2, 3, 0, 4, 2],
];

for (const nums of Tests) {
  console.log(removeElement(nums, 2));
}
