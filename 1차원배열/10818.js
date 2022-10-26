let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let n = input[1].split(" ").map((el) => Number(el));

n.sort((a, b) => a - b);
console.log(n[0], n[n.length - 1]);
