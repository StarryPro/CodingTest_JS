function solution(box, n) {
    let answer = 0;
    let a = Math.floor(box[0]/n)
    let b = Math.floor(box[1]/n)
    let c = Math.floor(box[2]/n)
    answer = a*b*c
    return answer;
}