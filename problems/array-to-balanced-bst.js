const { btBreadthFirstTraversal } = require("./utils");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Convert sorted array to a balanced binary search tree
function convertSortedArrToBST(arr, start, end) {
  if (start > end) return null;

  const mid = Math.floor((start + end) / 2);
  const root = new Node(arr[mid]);

  root.left = convertSortedArrToBST(arr, start, mid - 1);
  root.right = convertSortedArrToBST(arr, mid + 1, end);
  return root;
}

const arr = [1, 2, 3, 4, 5, 6, 7];
const root = convertSortedArrToBST(arr, 0, arr.length - 1);
btBreadthFirstTraversal(root);
