const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const solution = (input) => {
  const testArr = input.slice(1);
  testArr.forEach((item) => {
    const printArr = [];
    [...item.toString(2)].reverse().forEach((bit, i) => {
      if (bit === '1') printArr.push(i);
    });
    console.log(printArr.join(' '));
  });
};

solution(input);
