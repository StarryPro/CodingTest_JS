function solution(num_list) {
    let answer = [];
    let oddArr = [];
    let evenArr = [];
    for(let x of num_list){
        if(x%2 !== 0) {oddArr.push(x)} else{
            evenArr.push(x)
        }
    }
    answer = [evenArr.length, oddArr.length]
    return answer;
}