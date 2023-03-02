function solution(num) {
    let answer = 0;
    let count = 0;
    while(num !== 1){
        {num%2 === 0 ? num/=2 : num = num*3+1}
        
        count = count +1
        if(count === 500){return answer = -1}
    }
    answer = count
    return answer;
}