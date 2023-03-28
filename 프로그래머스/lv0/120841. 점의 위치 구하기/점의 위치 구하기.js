function solution(dot) {
    let answer = 0
    if(dot[0] > 0){
        dot[1] > 0 ? answer = 1 : answer = 4
    }
    if(dot[0] <0){
       dot[1] > 0 ? answer = 2 : answer = 3
       }
    return answer;
}