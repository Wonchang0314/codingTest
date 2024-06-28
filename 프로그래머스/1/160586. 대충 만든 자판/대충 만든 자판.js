function solution(keymap, targets) {
    var answer = [];
    let keys = [];
    keymap.forEach(key => {
        let m = {};
        for(let i = 0; i < key.length; i++){
            m[i + 1] = key[i];
        }
        keys.push(m);
    })
    
    console.log(keys)
    targets.forEach((t, i) => {
        let count = 0;
        for(let j = 0; j < t.length; j++){
            let min = Infinity;
            keys.forEach(key => {
                for(let [k, v] of Object.entries(key)){
                    if(v === t[j]) {
                        min = Math.min(Number(k), min);
                        break;
                    }
                }
            })
            count += min;
        }
        if(count === Infinity) answer.push(-1);
        else answer.push(count);
    })
    return answer;
}