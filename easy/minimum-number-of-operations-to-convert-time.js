function convertTime(current, correct) {
  if (current === correct) return 0;

  let minutes = 0;
  const [currentH, currentM] = current.split(":").map((value) => Number(value));
  const [correctH, correctM] = correct.split(":").map((value) => Number(value));

  if (currentH === correctH) {
    minutes = correctM - currentM;
  } else if (currentM === correctM) {
    minutes = (correctH - currentH) * 60;
  } else {
    minutes = 60 - currentM;
    minutes += (correctH - currentH - 1) * 60;
    minutes += correctM;
  }

  let ops = 0;
  const arr = [60, 15, 5, 1];
  for (const num of arr) {
    ops += Math.floor(minutes / num);
    minutes = minutes % num;
  }

  return ops;
}
