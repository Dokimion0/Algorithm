let input = require("fs").readFileSync("example.txt").toString().split("\n");

let res = 0;
let count = input[0];

for (let i = 1; i <= count; i++) {
  let score = 0;
  let sum = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      score++;
    } else {
      score = 0;
    }
    sum += score;
  }
  console.log(sum);
}
