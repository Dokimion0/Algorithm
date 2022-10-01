var input = require("fs").readFileSync("dev/stdin").toString().split(" ");

var num = parseInt(input[0]);
var count = 1;

while (count < 10) {
  console.log(`${num} * ${count} = ${num * count}`);
  count++;
}
