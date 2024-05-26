function solution(s) {
    var answer = [];
    let input = [];
    let temp = [];
    for(let i = 1; i < s.length; i++){
        if(!isNaN(Number(s[i])) && s[i - 1] === '{'){
            let num = '';
            while(!isNaN(Number(s[i]))){
                num += s[i];
                i += 1;
            }
            i -= 1;
            temp.push(Number(num));
        }
        if(s[i] === '}'){
            input.push(temp);
            temp = [];
        }
        else if(!isNaN(Number(s[i])) && s[i - 1] === ','){
            let num = '';
            while(!isNaN(Number(s[i]))){
                num += s[i];
                i += 1;
            }
            i -= 1;
            temp.push(Number(num));
        }
    }
    input.pop();
    input.sort((a, b) => a.length - b.length);
    for(let i = 0; i < input.length; i++){
        for(let j = 0; j < input[i].length; j++){
            let current = input[i][j];
            if(!answer.includes(current)){
                answer.push(current);
            }
        }
    }
    return answer;
}