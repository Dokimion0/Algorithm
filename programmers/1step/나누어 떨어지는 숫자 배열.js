function solution(arr, divisor) {
  const res = arr.filter((el) => el % divisor === 0).sort((a, b) => a - b);
  return !res.length ? [-1] : res;
}

console.log(solution([5, 9, 7, 10], 5));
