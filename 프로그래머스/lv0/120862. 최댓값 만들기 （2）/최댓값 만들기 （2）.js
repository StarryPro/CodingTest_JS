function solution(numbers) {
    let max = 0;
    let arrPlus = [];
    let arrMinus = [];
    
    if(numbers.length === 2) 
        return max = numbers[0]*numbers[1]
    
    for(let x of numbers){
        x < 0 ? arrMinus.push(x) : arrPlus.push(x)
    }
    if(arrMinus.length >= 2){
        arrMinus.sort((a,b)=> a-b)
        max = arrMinus[0]*arrMinus[1]
    }
    if(arrPlus.length >= 2){
        arrPlus.sort((a,b)=> b-a)
        if(max <= arrPlus[0]*arrPlus[1]){max = arrPlus[0]*arrPlus[1] } 
    }
    return max;
}