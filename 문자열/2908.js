let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

let str = input.join(" ").toString();

let num1 = str[2] + str[6] + str[0];
let num2 = str[1] + str[5] + str[4];

Number(num1) > Number(num2) ? console.log(num1) : console.log(num2);
