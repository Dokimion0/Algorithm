var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const result = [];
const answer = [1, 1, 2, 2, 2, 8];
const inputData = input.map((el) => parseInt(el));

for (let i = 0; i < answer.length; i++) {
  result[i] = answer[i] - inputData[i];
}

console.log(result.join(' '));