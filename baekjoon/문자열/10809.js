let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let prevIndex = -1;

const alphabet = [
  { label: "a", value: -1 },
  { label: "b", value: -1 },
  { label: "c", value: -1 },
  { label: "d", value: -1 },
  { label: "e", value: -1 },
  { label: "f", value: -1 },
  { label: "g", value: -1 },
  { label: "h", value: -1 },
  { label: "i", value: -1 },
  { label: "j", value: -1 },
  { label: "k", value: -1 },
  { label: "l", value: -1 },
  { label: "m", value: -1 },
  { label: "n", value: -1 },
  { label: "o", value: -1 },
  { label: "p", value: -1 },
  { label: "q", value: -1 },
  { label: "r", value: -1 },
  { label: "s", value: -1 },
  { label: "t", value: -1 },
  { label: "u", value: -1 },
  { label: "v", value: -1 },
  { label: "w", value: -1 },
  { label: "x", value: -1 },
  { label: "y", value: -1 },
  { label: "z", value: -1 },
];

for (let i = 0; i < input[0].length; i++) {
  let str = input[0][i];
  let index = alphabet.findIndex((el) => el.label === str);
  if (index !== prevIndex) {
    alphabet[index].value = i;
  }
  prevIndex = index;
}

const result = alphabet.map((el) => el.value);
console.log(...result);