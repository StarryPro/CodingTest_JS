function solution(n) {
    var answer = 0;
    // 제곱근 Math.sqrt()
    let x = Math.sqrt(n)
    // 정수 Number.isInteger()
    {x > 0 && Number.isInteger(x) ? answer = (x+1)**2 : answer =  -1}
    return answer;
}