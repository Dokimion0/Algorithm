let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let repeat = input.length;
let i = 0;

while (i < repeat-1) {
  let num = input[i].split(" ").map((el) => Number(el));
  let a = num[0];
  let b = num[1];
  console.log(a + b);
  i++;
}
