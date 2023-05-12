function mergeArrays(nums1, nums2) {
  let i = 0;
  let j = 0;
  const result = [];

  while (i < nums1.length && j < nums2.length) {
    const [leftId, leftVal] = nums1[i];
    const [rightId, rightVal] = nums2[j];

    if (leftId === rightId) {
      result.push([leftId, leftVal + rightVal]);
      i++;
      j++;
    } else if (leftId < rightId) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) result.push(nums1[i++]);
  while (j < nums2.length) result.push(nums2[j++]);

  return result;
}
