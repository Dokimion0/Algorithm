let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let num = input[0];

for (let i = 1; i <= num; i++) {
  let firstNum = input[i][0];
  let sum = 0;
  let count = 0;
  for (let j = 1; j <= firstNum; j++) {
    sum += Number(input[i].split(" ")[j]);
  }
  let average = sum / firstNum;
  for (let j = 1; j <= firstNum; j++) {
    if (Number(input[i].split(" ")[j]) > average) {
      count++;
    }
  }
  console.log(((count / firstNum) * 100).toFixed(3) + "%");
}
