var year = require("fs").readFileSync("/dev/stdin").toString().trim()
if ((year % 4 == 0 && year % 100 != 100) || year % 400 == 0) console.log(1);
else console.log(0);
