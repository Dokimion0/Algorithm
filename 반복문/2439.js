let input = require("fs").readFileSync("dev/stdin").toString().split(" ");
let answer = "";
let max = parseInt(input[0]);

for (let i = 0; i < max; i++) {
  for (let j = 0; j < max - i-1; j++) {
    answer += " ";
  }
  for (let k = 0; k <= i; k++) {
    answer += "*";
  }
  answer += "\n";
}

console.log(answer);

