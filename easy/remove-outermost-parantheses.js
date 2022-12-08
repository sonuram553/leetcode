// https://www.geeksforgeeks.org/reduce-string-by-removing-outermost-parenthesis-from-each-primitive-substring/

function removeOuterParentheses(s) {
  let count = 0;
  let result = "";

  for (const ch of s) {
    if (ch === "(") {
      if (count !== 0) result += ch;
      count++;
    } else {
      count--;
      if (count !== 0) result += ")";
    }
  }

  return result;
}
