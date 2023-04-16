function solution(num_list, n) {
    let answer = [];
    let arrN = [];
    for(let x of num_list){
        arrN.push(x)
        if(arrN.length === n){
            answer = [...answer, arrN]
            arrN = []
        }
    }
    return answer;
}