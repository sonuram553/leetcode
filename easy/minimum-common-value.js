function getCommon(nums1, nums2) {
  let i = 0,
    j = 0;
    
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) return nums1[i];
    if (nums1[i] < nums2[j]) i++;
    else j++;
  }

  return -1;
}
