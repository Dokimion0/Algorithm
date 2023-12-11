let res = '';
for (let j = 1; j <= 9; j++) {
  if (j !== 4) {
    for (let i = 2; i <= 5; i++) {
      res += `${i} * ${j} = ${i * j}`.padEnd(15);
    }
    console.log(res);
    res = '';
  }
}

console.log('');

for (let j = 1; j <= 9; j++) {
  if (j !== 4) {
    for (let i = 6; i <= 9; i++) {
      res += `${i} * ${j} = ${i * j}`.padEnd(15);
    }
    console.log(res);
    res = '';
  }
}
