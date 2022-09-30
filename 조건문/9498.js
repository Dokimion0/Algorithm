var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
var score = parseInt(input[0]);
if (A>B) console.log("A");
else if (score >= 80) console.log("B");
else if (score >= 70) console.log("C");
else if (score >= 60) console.log("D");
else console.log("F");