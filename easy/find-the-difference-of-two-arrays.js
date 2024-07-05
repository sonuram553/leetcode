/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);

  const result1 = [];
  for (const num of nums1Set) {
    if (!nums2Set.has(num)) {
      result1.push(num);
    }
  }

  const result2 = [];
  for (const num of nums2Set) {
    if (!nums1Set.has(num)) {
      result2.push(num);
    }
  }

  return [result1, result2];
};
