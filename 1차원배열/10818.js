let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let num = input[1].split(' ').map(el => Number(el))

num.sort((a,b) => a-b)
console.log(num[0], num[num.length-1])