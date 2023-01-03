let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let num = Number(input);
let tmp;
let count = 0;
let newNum = -1;

tmp = num;

while (num != newNum) {
  let a = parseInt(tmp / 10);
  let b = tmp % 10;

  newNum = b * 10 + ((a + b) % 10);
  count++;
  tmp = newNum;
}
console.log(count);
