function solution(bandage, health, attacks) {
    let answer = health;
    const t = bandage[0];
    const x = bandage[1];
    const y = bandage[2];
    
    let count = 0;
    let lastTime = 0;
    for(let attack of attacks) {
        lastTime = Math.max(attack[0], lastTime);
    }
    
    const m = new Map();
    attacks.forEach(attack => {
        m.set(attack[0], attack[1] || 0)
    })
    
    for(let i = 1; i <= lastTime; i++) {
        
        if(m.has(i)) {
            count = 0;
            answer -= m.get(i);
            
            if(answer <= 0) return -1;
        }
        else {
            count += 1;
            answer = Math.min(answer + x, health);
            if(count >= t) {
                answer = Math.min(answer + y, health);
                count = 0;
            }
        }
        //console.log(`시간: ${i} 정답: ${answer} 몬스터 공격: ${current} 카운트: ${count}`)
    }
    
    if(answer <= 0) return -1;
    return answer;
}