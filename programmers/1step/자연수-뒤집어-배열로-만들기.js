function solution(n) {
  let array = String(n);
  let answer = [];

  [...array].forEach((n) => {
    answer.unshift(Number(n));
  });
  return answer;
}
