function solution(order) {
    let answer = 0;
    let arrOrder = order.toString().split('') 
    let arr369 =arrOrder.filter(x => Number(x)%3 === 0 && Number(x) !== 0)
    answer = arr369.length
    return answer;
}