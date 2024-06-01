function decimalToBinary(decimalNumber) {
    return decimalNumber.toString(2);
};
function solution(s) {
    var answer = [];
    let removedZero = 0; 
    let count = 0;
    let input = "";
    while(s !== "1"){
        for(let i = 0; i < s.length; i++){
            if(s[i] === "1"){
                input += s[i];
            }
            else{
                removedZero += 1;
            }
        }
        count += 1;
        s = decimalToBinary(input.length);
        input = "";
    }
    
    return [count, removedZero];
}