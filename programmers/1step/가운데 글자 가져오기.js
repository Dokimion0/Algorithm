function solution(s) {
  if (s.length % 2 === 0) {
    return s.substring(s.length / 2 - 1, s.length / 2 + 1);
  } else {
    return s.substring(s.length / 2, s.length / 2 + 1);
  }
}

console.log(solution('abcd'));

// console.log([1, 2, 3, 4, 5].splice(2, 1));
