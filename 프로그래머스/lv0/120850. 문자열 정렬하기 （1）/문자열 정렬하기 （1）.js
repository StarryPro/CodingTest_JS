function solution(my_string) {
    let answer = [];
    answer = [...my_string].map(x => Number.parseInt(x))
    answer = answer.filter(x => !Number.isNaN(x)).sort((a,b)=> a-b) 
    return answer;
}