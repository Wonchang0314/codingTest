function solution(n,a,b)
{
    let answer = 1;
    while(a !== b){
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer += 1;
        if(a === b){
            answer -= 1;
        }
    }
    return answer;
}