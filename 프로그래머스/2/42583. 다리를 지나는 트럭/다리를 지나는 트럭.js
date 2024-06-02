function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let sum = 0; 
    let index = 0;
    let queue = new Array(bridge_length).fill(0);
    while(queue.length){
        sum -= queue.shift();
        if(truck_weights[index]){
            if(sum + truck_weights[index] <= weight){
                queue.push(truck_weights[index]);
                sum += truck_weights[index];
                index += 1;
            }
            else{
                queue.push(0);
            }
        }
        answer += 1;
    }
    return answer;
}