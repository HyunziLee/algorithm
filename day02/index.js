/** 
 * 83.3 / 100.0
 * JadenCase 문자열 만들기


 * https://school.programmers.co.kr/learn/courses/30/lessons/12951




 */

 function solution(s) {
  const lowAlphabet = "abcdefghigklmnopqrstuvwxyz"; 
  var answer = s.toLowerCase();
  let result3 = []

  let result = answer.split(" ").forEach((el)=>{
    if(!lowAlphabet.includes(el[0])){
      result3.push(el)
    }
    else if(lowAlphabet.includes(el[0])){
      el = el.replace(el[0], el[0].toUpperCase())
      result3.push(el)  
    }
    
  })
  return result3.join(" ");
}

let a = solution("Hello my     friend ");
console.log(a)