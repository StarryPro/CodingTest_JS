function solution(s) {
    let answer = true;
    if(s.length !== 4 && s.length !== 6) { answer = false} 
    if(!!s.match(/[a-zA-Z]/g)){answer = false}
    return answer;
}