function isPalindrome(s) {
  let start = 0;
  let end = s.length - 1;
  let flag = true;

  while (start < end) {
    const left = s[start].toLowerCase();
    const right = s[end].toLowerCase();

    if (isAlphaNumeric(left)) {
      if (isAlphaNumeric(right)) {
        if (left !== right) {
          flag = false;
          break;
        }
        start += 1;
        end -= 1;
      } else end -= 1;
    } else if (isAlphaNumeric(right)) {
      start += 1;
    } else {
      start += 1;
      end -= 1;
    }
  }

  return flag;
}

function isAlphaNumeric(ch) {
  return (
    (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) ||
    (ch.charCodeAt(0) >= 48 && ch.charCodeAt(0) <= 57)
  );
}

console.log(isPalindrome("race a car"));
