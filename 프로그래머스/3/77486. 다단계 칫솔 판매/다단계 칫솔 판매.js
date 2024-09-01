function solution(enroll, referral, seller, amount) {
    var answer = Array(enroll.length).fill(0);
    
    let parent = {}
    for(let i = 0; i < enroll.length; i++){
        parent[enroll[i]] = referral[i];
    }
    
    let total = {};
    for(let name of enroll){
        total[name] = 0;
    }
    
    for(let i = 0; i < seller.length; i++){
        let money = amount[i] * 100;
        let currentName = seller[i];
        
        while(money > 0 && currentName !== '-') {
            total[currentName] += money - Math.floor(money / 10);
            currentName = parent[currentName];
            money = Math.floor(money / 10);
        }
    }
   
    answer = enroll.map(name => total[name]);
    return answer;
}