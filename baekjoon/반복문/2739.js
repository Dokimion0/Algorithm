var input = require("fs").readFileSync("example.txt").toString().split(" ");

var num = parseInt(input[0]);
var count = 1;

while (count < 10) {
  console.log(`2 * ${count} = ${2 * count}`);
  count++;
}
