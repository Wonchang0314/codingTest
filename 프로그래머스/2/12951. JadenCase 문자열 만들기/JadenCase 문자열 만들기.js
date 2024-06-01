function isUpperCase(str) {
  return str === str.toUpperCase();
}
function solution(s) {
    var answer = '';
    for(let i = 0; i < s.length; i++){
        if(i === 0 || s[i-1] === " "){
            if(isNaN(s[i])) answer += s[i].toUpperCase();
            else answer += s[i];
        }
        else{
            if(isUpperCase(s[i])) answer += s[i].toLowerCase();
            else answer += s[i];
        }
    }
    return answer;
}