function solution(s) {
    const numberMap = {
    "zero": "0",
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9"
};
    const words = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = "";
    let temp = '';
    for(let i = 0; i < s.length; i++){
        if(!isNaN(Number(s[i]))) answer += s[i];
        else{
            temp += s[i];
            if(numberMap[temp]) {
                answer += numberMap[temp];
                temp = '';
            }
        }
    }

    
    return Number(answer);
}