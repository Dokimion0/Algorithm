var input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const time = input[0].split(" ").map(Number);
const currentHour = parseInt(time[0]);
const currentMinute = parseInt(time[1]);
let workingMinute = parseInt(input[1]);
let workingHour = 0;
let resMinute;
let resHour = currentHour;

resMinute = currentMinute + workingMinute;
if (resMinute >= 60) {
  workingHour = parseInt(resMinute / 60);
  resMinute = (currentMinute + workingMinute) % 60;
  resHour = workingHour + currentHour;

  if (resHour >= 24) {
    resHour = resHour % 24;
  }
}

console.log(resHour + " " + resMinute);
