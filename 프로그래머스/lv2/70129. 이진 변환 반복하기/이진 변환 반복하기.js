function solution(s) {
    let answer = [];
    let count = 0;
    let zeroCount = 0;
    let oneCount = 0;
    let totalZeroCount = 0;
    do{
        zeroCount = 0;
        oneCount = 0;
        count++; 
        for(let i = 0; i < s.length; i++){
        s[i] !== '1' ? zeroCount++ : oneCount++
        }
        s = oneCount.toString(2)
        totalZeroCount += zeroCount
    }while(s.length !== 1 )
    answer = [count, totalZeroCount]
    return answer;
}