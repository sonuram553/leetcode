function countSeniors(details) {
  return details.reduce((count, detail) => {
    const age = Number(detail.slice(11, 13));
    return age > 60 ? count + 1 : count;
  }, 0);
}
