/** 
 *  채점 결과
 * 정확성: 69.5
 * 효율성: 0.0
 * 합계: 69.5 / 100.0

 * https://school.programmers.co.kr/learn/courses/30/lessons/12909

 */

 function solution(s){
 
  let arr = [...s]
  let result = []
  let std = 0;

  if(s[0]===")" || s.length%2 === 1){
    return false
  }

  for(let i = 0 ;i<arr.length;i++){
    for(let j = i+1;j<arr.length;j++){
      if( std !==j && arr[i]==="(" && arr[i]!==arr[j]){
        std = j;
        result.push(arr[i])
        result.push(arr[j])
        break

      } 
    }
    
  }

 
  if(result.length %2 === 0 && result.length === arr.length){

    return true
  }else {
    
    return false
  }
  



}

let result = solution("(()(");
console.log(result)