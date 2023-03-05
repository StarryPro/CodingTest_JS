function solution(phone_number) {
    let answer = phone_number.slice(-4);
    for(let i = 0; i < phone_number.length-4; i++){
        answer = '*' + answer
    }
    return answer;
}
