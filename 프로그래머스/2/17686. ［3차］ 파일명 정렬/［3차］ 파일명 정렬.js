function solution(files) {
    var answer = [];
    
    files.forEach(file => {
        let match = file.match(/^([a-zA-Z\s.-]+)(\d{1,5})(.*)$/);
        if (match) {
            answer.push({
                head: match[1],
                number: match[2],
                tail: match[3],
                original: file
            });
        }
    });
    
    answer.sort((a, b) => {
        let headA = a.head.toLowerCase();
        let headB = b.head.toLowerCase();
    
        if(headA < headB) return -1;
        if(headA > headB) return 1;
        
        let numA = Number(a.number);
        let numB = Number(b.number);
        
        return numA - numB
    })
    
    answer = answer.map(file => file.original);
    return answer;
}