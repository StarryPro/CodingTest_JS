function solution(my_string, num1, num2) {
    let answer = '';
    let num1My_string = my_string[num1]
    let num2My_string = my_string[num2]
    let arrMy_string = [...my_string]
    arrMy_string[num1] = num2My_string
    arrMy_string[num2] = num1My_string
    answer = arrMy_string.join('')
    return answer;
}