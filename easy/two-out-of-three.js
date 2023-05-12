function twoOutOfThree(nums1, nums2, nums3) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const set3 = new Set(nums3);
  const set = new Set();

  for (const num of set1) {
    if (set2.has(num) || set3.has(num)) set.add(num);
  }

  for (const num of set2) {
    if (set3.has(num)) set.add(num);
  }

  return [...set];
}
