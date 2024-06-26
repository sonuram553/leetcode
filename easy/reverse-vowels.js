function reverseVowels(str) {
  const arr = str.split("");

  let start = 0;
  let end = arr.length - 1;
  let startVowel;
  const vowels = "aeiouAEIOU";

  while (start < end) {
    if (!startVowel && vowels.includes(arr[start])) {
      startVowel = arr[start];
    }

    if (startVowel) {
      if (vowels.includes(arr[end])) {
        const left = arr[start];
        arr[start] = arr[end];
        arr[end] = left;

        start++;
        startVowel = "";
      }
      end--;
    } else start++;
  }

  return arr.join("");
}
