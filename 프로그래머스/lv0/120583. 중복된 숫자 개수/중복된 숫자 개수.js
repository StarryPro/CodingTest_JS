function solution(array, n) {
    var answer = 0;
    let newArr = array.filter(x => x === n);
    answer = newArr.length
    return answer;
}