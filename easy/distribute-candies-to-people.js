function distributeCandies(candies, num_people) {
  const result = Array(num_people).fill(0);

  let count = 1;

  while (true) {
    for (let i = 0; i < num_people; i++) {
      if (candies > count) result[i] += count;
      else {
        result[i] += candies;
        return result;
      }

      candies -= count;
      count++;
    }
  }
}
