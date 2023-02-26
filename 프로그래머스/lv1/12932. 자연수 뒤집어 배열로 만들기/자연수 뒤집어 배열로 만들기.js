function solution(n) {
    var answer = [];
    let strN = String(n);
    for(let strn of strN){
        answer.unshift(Number(strn))
    }
    return answer;
}