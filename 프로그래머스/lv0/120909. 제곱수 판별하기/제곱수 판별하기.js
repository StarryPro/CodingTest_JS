function solution(n) {
    let answer = 0;
    let sqrtN = Math.sqrt(n)
    Number.isInteger(sqrtN) ? answer = 1 : answer = 2
    return answer;
}