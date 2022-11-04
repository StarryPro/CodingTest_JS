function solution(n) {
    let answer = [];
    
for(let i = 1; i<=n; i++){
let odd = 2*i-1
if(odd <= n) answer.push(odd)
}
    return answer;
}

