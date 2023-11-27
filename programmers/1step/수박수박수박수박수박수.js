function solution(n) {
  let res = '';
  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    res += '수박';
  }
  return n % 2 === 0 ? res : res.substring(0, n);
}

console.log(solution(2));
