function solution(arr) {
    let answer = [];
    let min = arr[0];
    for(let num of arr){
        if(min >= num){
            min = num
        }
    }
    answer = arr.filter(num => num !== min)
    if(answer.length === 0){answer = [-1]}
    return answer;
}