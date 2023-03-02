function solution(arr, divisor) {
    let answer = [];
    for(let x of arr){
        if(x%divisor === 0){
          answer.push(x)
        }
    }
    {answer.length === 0 ? answer = [-1] : answer.sort((a,b)=> a-b)};
    
    return answer;
}