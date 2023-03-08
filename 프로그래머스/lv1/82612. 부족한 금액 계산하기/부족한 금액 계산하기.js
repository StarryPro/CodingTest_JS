function solution(price, money, count) {
    var answer = -1;
for(let i = 1; i <= count; i++){
    money -= price*i
}
    money < 0 ? answer = Math.abs(money) : answer = 0
    return answer;
}