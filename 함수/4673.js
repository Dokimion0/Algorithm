let array = [];
let result = [];

for (let i = 1; i <= 10000; i++) {
  let n = 0;
  let stringNumber = String(i);
  for (let j = 0; j < stringNumber.length; j++) {
    n += Number(stringNumber[j]);
  }
  let dn = i + n;
  array.push(dn);
}

for (let i = 1; i < 10000; i++) {
  if (array.indexOf(i) === -1) {
    result += i + "\n";
  }
}
console.log(result);
