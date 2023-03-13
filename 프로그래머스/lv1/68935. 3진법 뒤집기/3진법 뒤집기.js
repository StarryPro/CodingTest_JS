function solution(n) {
    let answer = 0;
    let threeN = n.toString(3)
    let strThreeN = ''
    for(let i = threeN.length-1; i >= 0; i--){
        strThreeN = strThreeN + threeN[i]
    }
    for(let i = 0; i < strThreeN.length; i++){
        answer += Math.pow(3,i)*strThreeN[strThreeN.length-1-i];
    }
    
    return answer;
}