function solution(my_string) {
    let answer = '';
    let arrMy_string = [];
    for(let x of my_string){
        if(!arrMy_string.includes(x)) {arrMy_string.push(x)}
    }
    answer = arrMy_string.join('')
    return answer;
}