var input = require("fs").readFileSync("dev/stdin").toString().split("\n");
var result = parseInt(input[0]);
var kindNum = parseInt(input[1]);
var i = 2;
var sum = 0;

while (i <= kindNum + 1) {
  sum += parseInt(input[i].split(" ")[0]) * parseInt(input[i].split(" ")[1]);
  i++;
}
if (sum == result) console.log("Yes");
else console.log("No");
