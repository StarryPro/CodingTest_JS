function solution(n)
{
    let answer = 0;
   let strN = String(n)
    for(let num of strN){
        answer = answer + Number(num)
    }

    return answer;
}