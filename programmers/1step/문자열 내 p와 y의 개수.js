function solution(s) {
  let count = 0;

  s.toLowerCase()
    .split('')
    .forEach((el) => {
      if (el === 'p') count++;
      if (el === 'y') count--;
    });

  return count === 0;
}

solution('ppyy');
