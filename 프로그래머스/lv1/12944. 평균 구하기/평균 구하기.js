function solution(arr) {
    let answer = 0;
    let sum=0;
    for(let num of arr){
        sum = sum + num
    }
    answer = sum/arr.length
    return answer;
}