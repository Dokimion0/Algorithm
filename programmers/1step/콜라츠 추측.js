function solution(num) {
  if (num === 1) return 0;
  let count = 1;

  while (count <= 500) {
    num % 2 === 0 ? (num /= 2) : (num = num * 3 + 1);
    if (num === 1) break;
    else count++;
  }

  return count <= 500 ? count : -1;
}

console.log(solution(1));
