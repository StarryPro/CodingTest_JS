function solution(x) {
    let answer = true;
    let strX = String(x);
    let sumX = 0;
    for(let x of strX){
            sumX += Number(x) 
    }
    if(x%sumX === 0){
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}