// By using two maps
function intersection2(leftArr, rightArr) {
  const leftSize = leftArr.length;
  const rightSize = rightArr.length;

  // Case 1: If arrays are sorted
  if (isSorted(leftArr) && isSorted(rightArr)) {
    if (rightArr[0] > leftArr[leftSize - 1]) return [];
    if (leftArr[0] > rightArr[rightSize - 1]) return [];
  }

  if (isSorted(leftArr, false) && isSorted(rightArr, false)) {
    if (rightArr[0] < leftArr[leftSize - 1]) return [];
    if (leftArr[0] < rightArr[rightSize - 1]) return [];
  }
  // Case 1: End

  let largeArr;
  let smallArr;
  const smallMap = {};
  const largeMap = {};

  if (leftSize < rightSize) {
    smallArr = leftArr;
    largeArr = rightArr;
  } else {
    smallArr = rightArr;
    largeArr = leftArr;
  }

  for (const num of smallArr) {
    smallMap[num] = 1;
  }

  // Case 2: Check whether there is an intersection at all. To save filling map2.
  let isIntersection = false;
  for (const num of largeArr) {
    if (smallMap[num]) {
      isIntersection = true;
      break;
    }
  }

  if (!isIntersection) return [];
  // Case 2: End

  const result = [];
  for (const num of largeArr) {
    largeMap[num] = 1;
  }

  for (const num in smallMap) {
    if (largeMap[num]) result.push(num);
  }

  return result;
}

function isSorted(arr, ascending = true) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (ascending) {
      if (arr[i] > arr[i + 1]) return false;
    } else if (arr[i] < arr[i + 1]) return false;
  }

  return true;
}

// By using single map
function intersection(leftArr, rightArr) {
  let smallArr, largeArr;
  const map = {};
  const result = [];

  if (leftArr.length < rightArr.length) {
    smallArr = leftArr;
    largeArr = rightArr;
  } else {
    smallArr = rightArr;
    largeArr = leftArr;
  }

  for (const num of smallArr) {
    map[num] = 1;
  }

  for (const num of largeArr) {
    if (map[num]) {
      result.push(num);
      delete map[num];
    }
  }

  return result;
}
