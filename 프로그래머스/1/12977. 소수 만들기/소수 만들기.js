function isPrime(num) {
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function solution(nums) {
    var answer = -1;
    let count = [];
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let k = j+1; k < nums.length; k++){
                //console.log(nums[i] + nums[j] + nums[k])
                if(isPrime(nums[i] + nums[j] + nums[k])){
                    count.push(nums[i] + nums[j] + nums[k]);
                    
                }
            }
        }
    }
    return count.length;
}