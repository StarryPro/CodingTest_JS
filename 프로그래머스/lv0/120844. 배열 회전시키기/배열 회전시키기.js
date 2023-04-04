function solution(numbers, direction) {
    let answer = [];
    direction === 'right' 
        ? numbers.unshift(numbers.pop())
        : numbers.push(numbers.shift())
    answer = numbers
    return answer;
}