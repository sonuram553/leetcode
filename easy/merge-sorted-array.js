/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let j = m + n - 1;
  let l = m - 1; // points to nums1 last element
  let r = n - 1; // points to nums2 last element

  while (r >= 0) {
    if (nums1[l] > nums2[r]) {
      nums1[j] = nums1[l];
      l--;
    } else {
      nums1[j] = nums2[r];
      r--;
    }

    j--;
  }

  return nums1;
};
