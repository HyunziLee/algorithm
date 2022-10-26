/** 
 * 최댓값과 최솟값

 * https://school.programmers.co.kr/learn/courses/30/lessons/12939

 */


function solution(s) {
  let answer = [];
  let result = ""
  let toArr = s.split(" ")
  let toNum = toArr.map((el)=>{
    return Number(el)
  })

 
  answer.push(Math.min(...toNum).toString())
  answer.push(Math.max(...toNum).toString())

  console.log(answer)
  result = answer.join(" ")
  return result;
}

let result = solution("1 2 3 4")
