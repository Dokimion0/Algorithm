var input = require("fs").readFileSync("dev/stdin").toString().split("\n");

var repeat = parseInt(input[0]);
var i = 1;

while (i <= repeat) {
  console.log(
    parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1])
  );
  i++;
}
