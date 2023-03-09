function solution(s) {
    let answer = '';
    s = s.toLowerCase();
    if(typeof s[0] !== Number){answer += s[0].toUpperCase()}
    for(let i=1; i<s.length; i++){ 
       if(s[i-1] === " " && s[i] !== " "){
            let word = s[i].toUpperCase();
            answer += word
       } else {
            answer += s[i]
       }
       
    }
    return answer
}