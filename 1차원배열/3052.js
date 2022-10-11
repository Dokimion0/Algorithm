let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let num = input.map((el) => Number(el) % 42);
let array = num.filter((el, i) => num.indexOf(el) === i);
console.log(array.length);
