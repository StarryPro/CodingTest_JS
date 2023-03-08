function solution(arr1, arr2) {
    let answer = [];
    for(let i=0; i< arr1.length; i++ ){
        let numArr = [];
        for(let j=0; j<arr1[0].length; j++){
            num = arr1[i][j] + arr2[i][j]
            numArr.push(num)
        }
        answer[i] = numArr
    }
    return answer;
}