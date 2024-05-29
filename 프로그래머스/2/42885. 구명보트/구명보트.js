function solution(people, limit) {
    var answer = 0;
    let weight = 0;
    people.sort((a, b) => b - a);
    let left = 0;
    let right = people.length - 1;
    while(left <= right){
        if(people[left] + people[right] <= limit){
            left += 1;
            right -= 1;
            answer += 1;
        }
        else{
            left += 1;
            answer += 1;
        }
    }
    return answer;
}