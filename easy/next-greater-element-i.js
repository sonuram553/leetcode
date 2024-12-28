/**
 * Time Complexity O(n * m)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var nextGreaterElement = function (nums1, nums2) {
  const result = [];

  for (const num of nums1) {
    const idx = nums2.indexOf(num);
    let nextGreaterElementIdx = -1;

    for (let i = idx + 1; i < nums2.length; i++) {
      if (nums2[i] > nums2[idx]) {
        nextGreaterElementIdx = i;
        break;
      }
    }

    result.push(nextGreaterElementIdx);
  }

  return result;
};

// Time complexity O(n + m)
var nextGreaterElement = function (nums1, nums2) {
  const valToIndexMap = {};
  for (let i = 0; i < nums1.length; i++) valToIndexMap[nums1[i]] = i;

  const stack = [];
  const result = Array(nums1.length).fill(-1);

  nums2.forEach((num) => {
    while (stack.length && num > stack[stack.length - 1]) {
      const val = stack.pop();
      result[valToIndexMap[val]] = num;
    }
    if (num in valToIndexMap) stack.push(num);
  });

  return result;
};
