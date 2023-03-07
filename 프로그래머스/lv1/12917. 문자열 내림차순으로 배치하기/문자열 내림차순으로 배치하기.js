function solution(s) {
    var answer = '';
    let arrS = s.split('');
    answer = arrS.sort().reverse().join('')
    return answer;
}