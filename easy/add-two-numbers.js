const addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let result = null;
  let current = null;

  while (l1 || l2) {
    let firstDigit = 0;
    let secondDigit = 0;

    if (l1) {
      firstDigit = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      secondDigit = l2.val;
      l2 = l2.next;
    }

    let sum = firstDigit + secondDigit + carry;

    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    } else carry = 0;

    if (result === null) {
      result = new ListNode(sum);
      current = result;
    } else {
      const node = new ListNode(sum);
      current.next = node;
      current = node;
    }
  }

  if (carry === 1) current.next = new ListNode(1);

  return result;
};
