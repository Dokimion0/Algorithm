function solution(citations) {
  let i = 0;
  citations.sort((a, b) => a - b);
  for (i; i < citations.length; i++) {
    if (citations[i] >= citations.length - i) break;
  }
  return citations.length - i;
}

// 1. 논문의 인용 수를 오름차순으로 정렬
// 2. 가장 적게 인용된 논문부터 남은 논문 수 이상 인용되었는지 확인
// 3. 논문의 인용 수가 남은 논문 수 보다 많거나 같다면, H-Index

console.log(solution([3, 0, 6, 1, 5]));
