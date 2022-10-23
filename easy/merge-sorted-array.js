const merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1;
  if (m === 0) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }
    return nums1;
  }

  let i = m - 1;
  let j = n - 1;
  for (let k = m + n - 1; k >= 0; k--) {
    if (j === -1) break;
    if (i === -1) {
      nums1[k] = nums2[j];
      j -= 1;
    } else if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i -= 1;
    } else {
      nums1[k] = nums2[j];
      j -= 1;
    }
  }

  return nums1;
};
