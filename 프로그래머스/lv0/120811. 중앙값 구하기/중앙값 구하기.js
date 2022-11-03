function solution(array) {
    let newArr= array.sort(function(a,b){
        return a-b
    });
    let medianNum = Math.floor(newArr.length/2)
    let answer = newArr[medianNum]
    return answer;
}