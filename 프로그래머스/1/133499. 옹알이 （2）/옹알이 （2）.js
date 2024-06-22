function solution(babbling) {
    var answer = 0;
    let wordList = ['aya', 'ye', 'woo', 'ma'];
    
    babbling.forEach(word => {
        for (let i = 0; i < wordList.length; i++) {
            if (word.includes(wordList[i].repeat(2))) {
                break;
            }
            word = word.split(wordList[i]).join(' ');
        }
        if(word.split(' ').join('').length === 0) answer += 1;
    });
    
    return answer;
}