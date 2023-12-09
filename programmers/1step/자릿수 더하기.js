function solution(n) {
  const str = String(n);
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }

  return sum;
}

solution(987);
