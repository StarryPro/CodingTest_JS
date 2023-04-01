function solution(cipher, code) {
    let answer = '';
    for(let i = 1; i<= Math.floor(cipher.length/code); i++){    
        answer += cipher[code*i-1]
    }
    return answer;
}