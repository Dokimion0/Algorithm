const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const str = input.join('');
let obj = {};

for (let i = 0; i < str.length; i++) {
  let char = str[i].toUpperCase();

  obj[char] = ++obj[char] || 1;
}

let val = 0;
let res = '';

for (key in obj) {
  if (obj[key] > val) {
    val = obj[key];
    res = key;
  } else if (val === obj[key]) {
    res = '?';
  }
}
console.log(res);
