let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let repeat = input.length - 1;
let i = 0;

while (i < repeat) {
  if (
    parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1]) !=
    0
  ) {
    console.log(
      parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1])
    );
  } else break;
  i++;
}
