function solution(my_string) {
    let answer = '';
    answer = [...my_string].reduce((prev, cur) => {
    cur.search(/[a-z]/) === 0 ? cur = cur.toUpperCase() : cur = cur.toLowerCase()
    return prev + cur
    }, [])
    
    return answer;
}