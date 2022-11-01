const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const array = input.map((el) => Number(el)).sort((a, b) => a - b);

let count = 0;
let result = [];

for (let i = 1; i <= 30; i++) {
  if (array.indexOf(i) === -1) {
    console.log(i);
  }
}
