function solution(num, k) {
    let answer = 0;
    let arrNum = num.toString().split('')
    arrNum.includes(String(k)) 
        ? answer = arrNum.indexOf(String(k))+1 
        : answer =  -1
    return answer;
}