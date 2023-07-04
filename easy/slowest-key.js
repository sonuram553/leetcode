function slowestKey(releaseTimes, keysPressed) {
  let char = keysPressed[0];
  let maxDuration = releaseTimes[0];

  let i = 1;
  while (i < releaseTimes.length) {
    const duration = releaseTimes[i] - releaseTimes[i - 1];
    if (duration > maxDuration) {
      maxDuration = duration;
      char = keysPressed[i];
    } else if (duration === maxDuration) {
      if (keysPressed[i] > char) char = keysPressed[i];
    }
    i++;
  }

  return char;
}
