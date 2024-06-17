function solution(s, n) {
    var answer = '';    
    for(let i = 0; i < s.length; i++){
        if(s[i] === ' ') answer += ' ';
        else{
            let ascii = s[i].charCodeAt(0);
            if (ascii >= 65 && ascii <= 90) { // 대문자 처리
                ascii = ((ascii - 65 + n) % 26) + 65;
            } else if (ascii >= 97 && ascii <= 122) { // 소문자 처리
                ascii = ((ascii - 97 + n) % 26) + 97;
            }
            answer += String.fromCharCode(ascii);
        }
    }
    return answer;
}