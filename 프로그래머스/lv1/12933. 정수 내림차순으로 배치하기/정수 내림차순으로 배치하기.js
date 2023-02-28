function solution(n) {
    let answer = n+"";
    answer = answer.split('').sort((a,b)=> b-a).join('')
    answer = Number(answer)
    return answer;
}