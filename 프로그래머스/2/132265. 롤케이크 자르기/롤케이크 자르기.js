function solution(topping) {
    var answer = 0;
    let left = new Map();
    let right = new Map();
    for(let i = 0; i < topping.length; i++){
        if(!left.has(topping[i])){
            left.set(topping[i], 1);
        }
        else{
            left.set(topping[i], left.get(topping[i]) + 1);
        }
    }
    for(let i = topping.length - 1; i >= 0; i--){
        if(left.size === right.size){
            answer += 1;
        }
        if(!right.has(topping[i])){
            right.set(topping[i], 1);
            if(left.get(topping[i]) - 1 === 0){
                left.delete(topping[i]);
            }
            else{
                left.set(topping[i], left.get(topping[i]) - 1);
            }
        }
        else{
            right.set(topping[i], right.get(topping[i]) + 1);
            if(left.get(topping[i]) - 1 === 0){
                left.delete(topping[i]);
            }
            else{
                left.set(topping[i], left.get(topping[i]) - 1);
            }
        }
    }
    console.log(left, right)
    return answer;
}