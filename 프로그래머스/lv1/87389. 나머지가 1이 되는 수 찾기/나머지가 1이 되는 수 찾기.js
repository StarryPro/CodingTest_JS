function solution(n) {
    let answer = 0;
    let x = 1;
    do{
        x += 1
        answer = x
    }while(n%x !== 1)
    return answer;
}