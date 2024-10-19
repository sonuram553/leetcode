/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const total = nums1.length + nums2.length;
  const half = total >>> 1;

  // nums1 will always be smaller length array
  if (nums2.length < nums1.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  let l = 0;
  let r = nums1.length - 1;

  while (true) {
    const i = Math.floor((l + r) / 2); // mid index of nums1
    const j = half - i - 2;

    const ALeft = i >= 0 ? nums1[i] : -Infinity;
    const ARight = i + 1 < nums1.length ? nums1[i + 1] : Infinity;
    const BLeft = j >= 0 ? nums2[j] : -Infinity;
    const BRight = j + 1 < nums2.length ? nums2[j + 1] : Infinity;

    if (ALeft <= BRight && BLeft <= ARight) {
      if (total & 1) {
        return Math.min(ARight, BRight);
      }

      return (Math.max(ALeft, BLeft) + Math.min(ARight, BRight)) / 2;
    } else if (ALeft > BRight) {
      r = i - 1;
    } else l = i + 1;
  }
};
