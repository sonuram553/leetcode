function findPoisonedDuration(timeSeries, duration) {
  let poisonedDuration = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    const time = timeSeries[i];
    let currentDuration = time + duration - 1;

    if (i < timeSeries.length - 1) {
      if (currentDuration === timeSeries[i + 1])
        poisonedDuration += duration - 1;
      else if (currentDuration < timeSeries[i + 1])
        poisonedDuration += duration;
      else poisonedDuration += timeSeries[i + 1] - time;
    } else poisonedDuration += duration;
  }

  return poisonedDuration;
}
