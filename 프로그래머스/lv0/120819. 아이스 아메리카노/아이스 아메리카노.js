function solution(money) {
    let answer = [];
    let count = 0
    while(money >= 5500){
        count++
        money -= 5500
    }
    answer = [count, money]
    return answer;
}