function solution(n) {
    let answer = 0;
    let num = 1;
    for(let i = 1; i <=10; i++){
        num = num * i
        if(num > n){
            answer = i-1
            break;
        }
    }
    return answer;
}