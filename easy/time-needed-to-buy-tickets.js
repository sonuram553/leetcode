function timeRequiredToBuy(tickets, k) {
  let time = 0;

  while (true) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i] !== 0) {
        tickets[i]--;
        time++;
      }

      if (i === k && tickets[i] === 0) return time;
    }
  }
}
