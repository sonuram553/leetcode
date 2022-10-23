const words = ["leetcode", "win", "loops", "success"],
  pref = "code";

let count = 0;

for (const word of words) {
  if (word.length >= pref.length) {
    let isFound = true;
    for (let i = 0; i < pref.length; i++) {
      if (pref[i] !== word[i]) {
        isFound = false;
        break;
      }
    }

    if (isFound) count += 1;
  }
}

console.log(count);
