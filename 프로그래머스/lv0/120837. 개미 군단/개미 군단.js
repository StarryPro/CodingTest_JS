function solution(hp) {
    let answer = 0;
    // 최대한 장군개미로 해결한다. 
    let a = Math.floor(hp/5)
    // 장군개미로 해결하고 남은 hp를 병정개미로 최대한 해결한다.
    let b = Math.floor(hp%5/3) 
    // 장군개미와 병정개미로 최대한 나머지를 해결한다. 
    let c = hp%5%3/1                        
    answer = a + b + c
    return answer;
}