function solution(array) {
    let answer = [];
    let maxNum = Math.max(...array)
    let maxNumidx = array.indexOf(maxNum)
    answer = [maxNum, maxNumidx]
    return answer;
}