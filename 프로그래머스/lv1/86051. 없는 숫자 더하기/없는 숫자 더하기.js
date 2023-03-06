function solution(numbers) {
    let answer = 0;
    for(let i = 0; i <=9; i++ ){
        answer+=i
    }
    for(let num of numbers){
        answer-=num
    }
    return answer;
}