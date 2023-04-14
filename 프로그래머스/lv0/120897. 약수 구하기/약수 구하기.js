function solution(n) {
    let answer = [];
    for(let i = 1; i <= n; i++){
        if(n%i === 0 && !answer.includes(i)){
        answer = [...answer, i]
        }
    }
    answer.sort((a,b)=> a-b)
    return answer;
}