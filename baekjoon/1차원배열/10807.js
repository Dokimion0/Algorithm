let input = require('fs').readFileSync('dev/stdin').toString().split('\n');
let count = 0;

for (let i = 0; i < Number(input[0]); i++) {
  if (input[2] === input[1].split(' ').join('')[i]) {
    count++;
  }
}
console.log(count);
