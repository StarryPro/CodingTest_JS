function solution(s){
    var answer = true;
    let numP = 0;
    let numS = 0;
   for(let str of s.toLowerCase()){
       if(str === 'p'){
           numP++
       }
       if(str === 'y'){
           numS++
       }
   }
    if(numP !== numS) {answer = false} 
    
    return answer;
}