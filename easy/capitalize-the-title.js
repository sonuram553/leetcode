function capitalizeTitle(title) {
  return title
    .split(" ")
    .map((word) => {
      word = word.toLowerCase();
      return word.length < 3 ? word : word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}
