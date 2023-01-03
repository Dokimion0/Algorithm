var input = require("fs").readFileSync("dev/stdin").toString().split(" ");

var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

if (a == b && b == c) {
  console.log(10000 + a * 1000);
} else if (a == b || b == c || c == a) {
  a == b
    ? console.log(1000 + a * 100)
    : b == c
    ? console.log(1000 + b * 100)
    : console.log(1000 + c * 100);
} else {
  a > b
    ? a > c
      ? console.log(a * 100)
      : console.log(c * 100)
    : b > c
    ? console.log(b * 100)
    : console.log(c * 100);
}
