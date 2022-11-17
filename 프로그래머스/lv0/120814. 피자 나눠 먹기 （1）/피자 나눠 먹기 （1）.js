function solution(n) {
    let answer = 0;
  let pizza = Math.ceil(n/7)
  if(pizza === 0 || pizza === 1) {answer = 1}else{answer = pizza}  
    return answer;
}