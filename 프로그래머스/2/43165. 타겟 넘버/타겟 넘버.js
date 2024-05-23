function solution(numbers, target) {
    var answer = 0;
    let index = 0;
    function recursion (num, index){
        if(index === numbers.length){
            if(num === target){
                answer += 1;
            }
            return;
        }
        recursion(num + numbers[index], index + 1);
        recursion(num - numbers[index], index + 1);
    }
    recursion(0, 0);
    return answer;
}
