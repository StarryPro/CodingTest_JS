function solution(a, b) {
    let answer = 0;
    if(a === b){
        answer = a
    }
    if(a > b){
        for(let i = b; i <= a; i++){
            answer = answer + i
        }
    }
    if(b > a){
         for(let j = a; j <= b; j++){
            answer = answer + j
        }
    }
    return answer;
}