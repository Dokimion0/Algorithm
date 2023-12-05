function solution(absolutes, signs) {
  const arr = [];
  absolutes.forEach((el, i) => {
    if (signs[i]) arr.push(+el);
    else arr.push(-el);
  });

  return arr.reduce((acc, cur) => acc + cur);
}

console.log(solution([4, 7, 12], [true, false, true]));
