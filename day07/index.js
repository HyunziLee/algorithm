/** 
 * 채점 결과
 * 정확성: 100.0
 * 합계: 100.0 / 100.0

 * https://school.programmers.co.kr/learn/courses/30/lessons/42842

 */
 function solution(brown, yellow) {
  var answer = [];
  
 let std = brown+yellow
  for(let i = 1 ; i<=std ; i++){
    if(std%i === 0){
     if(brown === (std/i)*2 + std/(std/i)*2 - 4){
       answer.push(i)
     }
    }
  }
  if(answer[0]<answer[1]){
    answer.reverse()
  }
  if(answer.length===1){
    answer = [answer[0],answer[0]]
  }
  return answer;
}




