function solution(num_list) {
    var answer = [];
    for(let x of num_list){
        answer.unshift(x)
    }
    return answer;
}