function solution(phone_number) {
  return phone_number.replace(/.(?=.{4,}$)/g, '*');
}

console.log(solution('01033334444'));
