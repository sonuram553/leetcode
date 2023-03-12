function countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob) {
  arriveAlice = parseDate(arriveAlice);
  leaveAlice = parseDate(leaveAlice);
  arriveBob = parseDate(arriveBob);
  leaveBob = parseDate(leaveBob);

  let arriveMonth;
  let arriveDay;
  let leaveMonth;
  let leaveDay;

  // Find common arrive month and day
  if (arriveAlice[0] === arriveBob[0]) {
    arriveMonth = arriveAlice[0];
    arriveDay = Math.max(arriveAlice[1], arriveBob[1]);
  } else if (arriveAlice[0] > arriveBob[0]) {
    arriveMonth = arriveAlice[0];
    arriveDay = arriveAlice[1];
  } else {
    arriveMonth = arriveBob[0];
    arriveDay = arriveBob[1];
  }

  // Find common leave month and day
  if (leaveAlice[0] === leaveBob[0]) {
    leaveMonth = leaveAlice[0];
    leaveDay = Math.min(leaveAlice[1], leaveBob[1]);
  } else if (leaveAlice[0] < leaveBob[0]) {
    leaveMonth = leaveAlice[0];
    leaveDay = leaveAlice[1];
  } else {
    leaveMonth = leaveBob[0];
    leaveDay = leaveBob[1];
  }

  // Calculate number of days together
  if (arriveMonth > leaveMonth) return 0;
  if (arriveMonth === leaveMonth) {
    if (arriveDay > leaveDay) return 0;
    return leaveDay - arriveDay + 1;
  } else {
    const months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let count = months[arriveMonth] - arriveDay + 1;

    for (let i = arriveMonth + 1; i < leaveMonth; i++) {
      count += months[i];
    }

    return count + leaveDay;
  }
}

// return [month, day]
function parseDate(monthDay) {
  return monthDay.split("-").map((value) => Number(value));
}
