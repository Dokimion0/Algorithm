function solution(arr) {
  return 45 - arr.reduce((acc, cur) => acc + cur);
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
