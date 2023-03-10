function solution(A,B){
    let answer = 0;
    let arrA = A.sort((a,b)=> a-b);
    let arrB = B.sort((a,b)=> b-a);
   for(let i = 0; i< A.length; i++){
      answer += arrA[i]*arrB[i]
   }
 
    return answer;
}