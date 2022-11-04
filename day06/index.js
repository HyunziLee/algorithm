/** 
 * 채점 결과
 * 정확성: 100.0
 * 합계: 100.0 / 100.0

 * https://school.programmers.co.kr/learn/courses/30/lessons/42747

 */

 function solution(c) {
  let answer = 0;
    for(let i =0;i<c.length;i++){
      let std =0;
      if(c[i]===0){
        std++
      }
      if(std===c.length)
        return answer;
    }
  let result = c.sort((a,b)=>b-a) 
    for(let i =0;i<result.length;i++){
      if(result[i]<=i){
    
        answer = i
     
        return answer
      }
    }
    if(answer === 0 ){
      return asnwer = c.length
    }
  
  
  }