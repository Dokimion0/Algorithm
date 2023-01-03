const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

const count = input[0];
let string = input[1];
if (string === undefined) string = 0;
let array = "";
for (let i = 0; i < string.length; i++) {
  let char = string[i];
  for (let j = 0; j < count; j++) {
    array += char;
  }
}

console.log(array);
