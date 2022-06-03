function solution(n, m) {
    let answer = [];
   // [최대공약수, 최소공배수]
    function GCD(n, m){
        let result = n % m 
        if(result === 0) return m
        return GCD(m, result)
    }
    answer.push(GCD(n,m))
    answer.push(n*m / GCD(n,m))
    return answer;
}
 // 최대공약수(GCD) 구하는 공식
 // 유클리드 호제법 
// 두 수 중에서 큰 수를 작은 수로 나눈다. (상관 x)
// 만약 나머지가 0이 아니라면 
// let result = a % b
// if(result === 0) return b
// 작은 수를 나머지로 나눈다.
// return GCD(b, result)
// 이 과정을 반복해서 나머지가 0이 되면 그 수가 두 수의 최대공약수