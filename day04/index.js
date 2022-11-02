/** 
 * 채점 결과
 * 정확성: 69.6
 * 효율성: 30.4
 * 합계: 100.0 / 100.0

 * https://school.programmers.co.kr/learn/courses/30/lessons/12941

 */

 function solution(A,B){
  var answer = 0;
let a = A.sort((a,b)=>  a-b)

let b  = B.sort( (a,b) => b-a)


for(let i =0;i<a.length;i++){
  answer = answer +  a[i] * b[i]
}




  return answer;
}

let a = solution([1,4,2],[5,4,4])
console.log(a)