function getCombinations(str, length) {
    const result = [];

    function generateCombination(prefix, start) {
        if (prefix.length === length) {
            result.push(prefix);
            return;
        }

        for (let i = start; i < str.length; i++) {
            generateCombination(prefix + str[i], i + 1);
        }
    }

    generateCombination('', 0);
    return result;
}

function solution(orders, course) {
    var answer = [];
    const map = new Map();
    
    orders.forEach(order => {
        const sortedOrder = order.split('').sort().join('');
        course.forEach(length => {
            getCombinations(sortedOrder, length).forEach(combination => {
                map.set(combination, (map.get(combination) || 0) + 1);
            });
        });
    });
    
    const arr = Array.from(map);
    arr.sort((a, b) => b[1] - a[1]);
    
    for(let i = 0; i < course.length; i++) {
        const temp = arr.filter(e => e[0].length === course[i]);        
        if(!temp.length) break;
        
        const max = temp[0][1];
        const menu = temp.filter(e => e[1] === max && e[1] > 1);
        menu.forEach(m => answer.push(m[0]));
    }
    answer = answer.map(e => e.split('').sort().join(''));
    answer.sort();
    
    return answer;
}