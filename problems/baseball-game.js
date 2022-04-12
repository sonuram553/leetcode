function calPoints(ops) {
  const record = [];

  for (const op of ops) {
    const size = record.length;
    if (op === "+") record.push(record[size - 1] + record[size - 2]);
    else if (op === "D") record.push(record[size - 1] * 2);
    else if (op === "C") record.pop();
    else record.push(+op);
  }

  return record.reduce((sum, value) => sum + value);
}
