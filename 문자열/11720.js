let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let sum = 0;

for (let i = 0; i < Number(input[0]); i++) {
  let num = String(input[1])[i];
  sum += Number(num);
}
console.log(sum);
