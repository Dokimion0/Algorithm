let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let count = input[0];
let num = input[1].split(" ");
let max = num.sort((a, b) => a - b)[count - 1];
let newNum = num.map((el) => (el / max) * 100);
console.log(newNum);
console.log(newNum.reduce((acc, cur) => acc + cur) / count);
