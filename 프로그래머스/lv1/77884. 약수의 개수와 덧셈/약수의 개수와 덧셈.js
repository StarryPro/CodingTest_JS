function solution(left, right) {
    let answer = 0;
    let num = 0;
    for(i = left; i<=right; i++){
        for(j = 1; j<=i; j++){
            if(i%j === 0){
                num++
            }   
        }
        num%2 === 0 ? answer +=i : answer -=i
        num = 0 
    }
    return answer;
}