var input = require("fs").readFileSync("dev/stdin").toString().split(" ");

var repeat = parseInt(input[0]);
var i = 1;
var sum = 0;

while (i <= repeat) {
  sum += i;
  i++;
}
console.log(sum);