let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let repeat = parseInt(input[0]);
let answer = "";

for (let i = 1; i <= repeat; i++) {
  let num = input[i].split(" ");
  console.log(
    `Case #${i}: ${parseInt(num[0])} + ${parseInt(num[1])} = ${
      parseInt(num[0]) + parseInt(num[1])
    }`
  );
}
console.log(answer);
