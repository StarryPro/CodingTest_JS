process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let star = '*';
    let answer;
    for(let i = 0; i<a-1; i++){
         star += '*'
    }
    answer = star;
    for(let j=0; j<b-1; j++){
        answer += "\n"+star 
    }
    console.log(answer)
});



