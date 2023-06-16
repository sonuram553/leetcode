function minNumber(nums1, nums2) {
  let commonSmallest;
  const set1 = new Set(nums1);

  for (const num of nums2) {
    if (set1.has(num)) {
      if (commonSmallest) commonSmallest = Math.min(commonSmallest, num);
      else commonSmallest = num;
    }
  }

  if (commonSmallest) return commonSmallest;

  const smallest1 = Math.min(...nums1);
  const smallest2 = Math.min(...nums2);

  return smallest1 < smallest2
    ? smallest1 * 10 + smallest2
    : smallest2 * 10 + smallest1;
}
