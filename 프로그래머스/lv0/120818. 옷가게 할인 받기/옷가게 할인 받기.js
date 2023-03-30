function solution(price) {
    let answer = price;
    if(price >= 500000) {return Math.floor(answer*0.80)}
    else if(price >= 300000) {return Math.floor(answer*0.90)}
    else if(price >= 100000) {return Math.floor(answer*0.95)}
    return answer;
}