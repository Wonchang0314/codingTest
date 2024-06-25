function solution(s) {
    var answer = '';
    let regex = /[A-Z]/;
    let temp = s.split('');
    temp.sort((a, b) => {
        if(regex.test(a) && !regex.test(b)) return 1;
        else if(!regex.test(a) && regex.test(b)) return -1;
        else return b.charCodeAt(0) - a.charCodeAt(0);
    })
    answer = temp.join('')
    return answer;
}