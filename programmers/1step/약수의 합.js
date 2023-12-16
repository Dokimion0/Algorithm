function solution(n) {
  const numberSet = new Set();

  if (!n) return 0;
  let sum = 0;
  const squareRoot = Math.floor(Math.sqrt(n));

  for (let i = 1; i <= squareRoot; i++) {
    if (n % i === 0) {
      numberSet.add(n / i);
      numberSet.add(i);
    }
  }
  return [...numberSet].reduce((acc, cur) => acc + cur)
}

solution(10);
