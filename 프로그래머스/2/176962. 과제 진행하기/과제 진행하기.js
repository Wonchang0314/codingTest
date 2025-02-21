function solution(plans) {
    var answer = [];
    const waiting = [];
    
    plans.forEach((plan) => {
        const [hour, minute] = plan[1].split(":").map(Number);
        plan[1] = hour * 60 + minute;
        plan[2] = Number(plan[2]);
    });
    
    plans.sort((a, b) => a[1] - b[1])

    let current = plans.shift();
    let currentTime = current[1];
    
    while(true) {
        const [course, start, cost] = current;

        if(plans.length && currentTime + cost > plans[0][1]) {
            const remaining = currentTime + cost - plans[0][1];
            waiting.push([course, start, remaining]);
            
            current = plans.shift();
            currentTime = current[1];
        }
        else {
            answer.push(course);
            currentTime += cost;
            
            if(waiting.length) {
                current = waiting.pop();
            }
            else if (plans.length) {
                current = plans.shift();
                currentTime = current[1];
            }
            else {
                break;
            }
        }
    }
    
    return answer;
}