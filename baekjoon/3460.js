let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let count = 0;

for (let i = 1; i <= Number(input); i++) {
  let digit = String(i);
  if (i < 100) {
    count++;
  } else if (i < 1000) {
    let diff1 = Number(digit[0]) - Number(digit[1]);
    let diff2 = Number(digit[1]) - Number(digit[2]);
    if (diff1 === diff2) {
      count++;
    }
  }
}
console.log(count);
