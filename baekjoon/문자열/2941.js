const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

const arr = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

let result = input;
for (let alphabet of arr) {
  result = result.split(alphabet).join('@');
}

console.log(result.length);
