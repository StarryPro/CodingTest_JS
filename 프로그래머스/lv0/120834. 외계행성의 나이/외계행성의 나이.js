function solution(age) {
    let answer = ''
    let ageAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    const ageArr = age.toString().split('')
    answer = ageArr.map(x => ageAlphabet[x]).join('')
    return answer;
}