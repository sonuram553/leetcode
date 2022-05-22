// Intersection of Two Array II

function intersect(nums1, nums2) {
  const size1 = nums1.length;
  const size2 = nums2.length;

  // Case 1: If arrays are sorted
  if (isSorted(nums1) && isSorted(nums2)) {
    if (nums2[0] > nums1[size1 - 1]) return [];
    if (nums1[0] > nums2[size2 - 1]) return [];
  }

  if (isSorted(nums1, false) && isSorted(nums2, false)) {
    if (nums2[0] < nums1[size1 - 1]) return [];
    if (nums1[0] < nums2[size2 - 1]) return [];
  }
  // Case 1: End

  const map1 = {};
  const map2 = {};
  const result = [];
  let largeArr;
  let smallArr;
  let isIntersection = false;

  if (size1 < size2) {
    smallArr = nums1;
    largeArr = nums2;
  } else {
    smallArr = nums2;
    largeArr = nums1;
  }

  for (const num of smallArr) {
    map1[num] = map1[num] + 1 || 1;
  }

  // Check whether there is an intersection at all.
  for (const num of largeArr) {
    if (map1[num]) {
      isIntersection = true;
      break;
    }
  }

  if (!isIntersection) return [];

  for (const num of largeArr) {
    map2[num] = map2[num] + 1 || 1;
  }

  for (const num in map1) {
    if (map2[num]) {
      let count = 0;

      if (map1[num] === map2[num]) count = map1[num];
      else count = Math.min(map1[num], map2[num]);

      for (let i = 0; i < count; i++) result.push(num);
    }
  }

  return result;
}

function isSorted(arr, ascending = true) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (ascending) {
      if (arr[i] > arr[i + 1]) return false;
    } else {
      if (arr[i] < arr[i + 1]) return false;
    }
  }

  return true;
}

// console.log(isSorted([3, 2, 3], false));
