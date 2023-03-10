function solution(s){
    let answer = true;
    let arr = [];
    if(s[0] === ')') return answer = false;
    for(let i = 0; i<s.length; i++){
       s[i] === '(' ? arr.push('(') : arr.pop('(') 
    }
    arr.length === 0 ? answer = true : answer = false
    return answer;
}