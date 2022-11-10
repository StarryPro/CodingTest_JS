function solution(n, k) {
    let answer = 0;
    if(n<10){
        answer =12000*n + 2000*k
    } else{
        answer = 12000*n + 2000*(k-(Math.floor(n/10)))
    }
    return answer;
}