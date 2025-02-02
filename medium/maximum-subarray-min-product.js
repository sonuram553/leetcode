/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function (nums) {
  const stack = [];
  const prefix = [0];
  let res = 0;

  nums.forEach((num, i) => prefix.push(prefix[i] + num));

  nums.forEach((num, i) => {
    let newStart = i;
    while (stack.length && stack[stack.length - 1][1] > num) {
      const [start, val] = stack.pop();
      const total = prefix[i] - prefix[start];
      res = Math.max(res, val * total);
      newStart = start;
    }
    stack.push([newStart, num]);
  });

  while (stack.length) {
    const [start, val] = stack.pop();
    const total = prefix[nums.length] - prefix[start];
    res = Math.max(res, val * total);
  }

  return res % (10 ** 9 + 7);
};
