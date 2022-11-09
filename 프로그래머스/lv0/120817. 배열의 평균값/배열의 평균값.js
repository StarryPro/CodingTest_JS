function solution(numbers) {
    let answer = 0;
    let sum = 0
    let numbersLength = numbers.length
    for(let i = 0; i < numbersLength; i++){
        sum = sum + numbers[i]
    }
    answer = sum/numbersLength
    return answer;
}