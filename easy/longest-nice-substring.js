// Using Divide and Conquer Technique
// Time Complexity O(N logN)
// Space Complexity O(N)

function longestNiceSubstring(s) {
  function helper(s, start, end) {
    // We need at least two characters at a time.
    if (start >= end) return "";

    let i = start;
    const set = new Set(s.slice(start, end));

    while (i < end) {
      const ch = s[i];
      if (ch.charCodeAt(0) < 91) {
        // Corresponding lowercase char doesn't exist
        if (!set.has(String.fromCharCode(ch.charCodeAt(0) + 32))) break;
      } else {
        // Corresponding uppercase char doesn't exist
        if (!set.has(String.fromCharCode(ch.charCodeAt(0) - 32))) break;
      }
      i++;
    }

    if (i === end) return s.slice(start, end);
    if (i === 0) return helper(s, i + 1, end);
    const leftStr = helper(s, start, i);
    const rightStr = helper(s, i + 1, end);

    if (leftStr.length >= rightStr.length) return leftStr;
    return rightStr;
  }

  return helper(s, 0, s.length);
}
