function solution(array, height) {
    let answer = 0;
    let newArr = array.filter(x => x > height)
    answer = newArr.length
    return answer;
}