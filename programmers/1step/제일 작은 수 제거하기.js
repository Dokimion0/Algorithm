function solution(arr) {
  const res = arr.filter((el) => el !== Math.min(...arr));
  return !res.length ? [] : res;
}

console.log(solution([4, 3, 2, 1]));
