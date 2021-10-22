const twoSum = function (nums, target) {
  const map = {};

  for (const [index, value] of nums.entries()) {
    const indices = map[value] || [];
    indices.push(index);
    map[value] = indices;
  }

  for (const key in map) {
    const lhs = parseInt(key);
    const rhs = target - lhs;
    const indices = map[key];

    if (lhs === rhs && indices.length > 1) {
      return [indices[0], indices[1]];
    }

    if (lhs !== rhs && map[rhs]) {
      return [map[lhs][0], map[rhs][0]];
    }
  }
};

const nums = [1, 1, 1, 2, 2, 3, 4];

console.log(twoSum(nums, 2));
