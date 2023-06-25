function distanceTraveled(mainTank, additionalTank) {
  const KMPL = 10;
  let distance = 0;

  while (true) {
    if (mainTank < 5) return distance + mainTank * KMPL;
    distance += 5 * KMPL;
    mainTank -= 5;

    if (additionalTank) {
      additionalTank--;
      mainTank++;
    }
  }
}
