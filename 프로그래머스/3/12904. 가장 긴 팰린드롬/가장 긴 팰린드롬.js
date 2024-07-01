function solution(s){
    var answer = 0;
    if(s.length < 2) return s.length;
    
    const find = (str, left, right) => {
        while(left >= 0 && right < str.length && str[left] === str[right]){
            left -= 1;
            right += 1;
        }
        return right - left - 1;
    }
    
    for(let i = 0; i < s.length - 1; i++){
        answer = Math.max(find(s, i, i+1), answer);
        answer = Math.max(find(s, i, i+2), answer);
    }
    return answer;
}