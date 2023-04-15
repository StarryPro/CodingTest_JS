function solution(n) {
    let set = new Set();
    let answer = 0;
    for(let i = 1; i<=n; i++){
        set.clear()
        for(let j = 1; j <= Math.sqrt(i); j++){
            if(i%j === 0){
                set.add(j)
                set.add(i/j)
            }
            if(set.size >= 3){ 
                answer+=1 
                break;
            }                   
        }    
    } 
    return answer;
}