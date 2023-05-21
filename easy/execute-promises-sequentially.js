let count = 0;

function wait() {
  return new Promise((res) => {
    setTimeout(() => {
      res(count++);
    }, 5000);
  });
}

const promises = [wait, wait, wait, wait];
async function executePromisesSequentially(index = 0) {
  if (index >= promises.length) return;

  const res = await promises[index]();
  console.log(res);
  await executePromisesSequentially(index + 1);
}

executePromisesSequentially();
