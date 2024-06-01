function solution(s, skip, index) {
    var answer = '';
    skip = skip.split('');
    for(let i = 0; i < s.length; i++){
        let num = s[i].charCodeAt(0);
        let count = 0;
        while(count < index){
            num += 1;
            if(num > 122){
                num = 97;
            }
            let str = String.fromCharCode(num);
            if(!skip.includes(str)){
                count += 1;
            }
        }
        answer += String.fromCharCode(num);
    }
    return answer;
}