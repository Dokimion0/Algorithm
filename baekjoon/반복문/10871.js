let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let max = parseInt(input[0].split(" ")[1]);
console.log(
  input[1]
    .split(" ")
    .map((el) => parseInt(el))
    .filter((el) => el < max)
    .join(" ")
);
