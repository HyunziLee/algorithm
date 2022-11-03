/** 
 * 채점 결과
 * 정확성: 75.0
 * 효율성: 25.0
 * 합계: 100.0 / 100.0

 * https://school.programmers.co.kr/learn/courses/30/lessons/12924

 */

function solution(n) {
  var answer = 0;

  let num = 0;
for(let i = 1 ;i<=n;i++){
  for(let j = i ;j<=n;j++){
  	
   num = num+j
  
    if(num>n){
      num=0;
      break
    }
    else if(num===n){
      answer = answer+1;
      num = 0;
      break;
    }
  }
}
  return answer;
}

let a = solution(15)