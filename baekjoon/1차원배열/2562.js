let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let num = input.map((el) => Number(el));
let max = num.reduce((pre, cur) => (pre < cur ? cur : pre));
console.log(max);

for (let i = 0; i < num.length-1; i++) {
  if (max == num[i]) return console.log(i+1);
}
