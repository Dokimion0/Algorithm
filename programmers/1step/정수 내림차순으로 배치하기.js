function solution(n) {
  return parseInt(
    String(n)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

console.log(solution(118372));
