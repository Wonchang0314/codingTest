class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class LinkedList {
    constructor(n){
        this.head = new Node(0);
        let current = this.head;
        
        for(let i = 1; i < n; i++){
            const newNode = new Node(i)
            current.next = newNode;
            newNode.prev = current;
            current = newNode;
        }
    }
}
function solution(n, k, cmd) {
    var answer = '';
    
    let removed = [];
    
    const list = new LinkedList(n);
    let current = list.head;
    for(let i = 0; i < k; i++){
        current = current.next;
    }

    cmd.forEach(element => {
        const temp = element.split(' ');
        if(temp.length === 2){
            const cmd = temp[0];
            const x = Number(temp[1]);
            if(cmd === 'U'){
                for (let i = 0; i < parseInt(x); i++) {
                current = current.prev;
            }
            }
            else{
                for(let i = 0; i < parseInt(x); i++){
                    current = current.next;
                }
            }
        }
        else{
            if(temp[0] === 'C'){
                removed.push(current);
                if(current.prev) current.prev.next = current.next;
                if(current.next) current.next.prev = current.prev;
                current = current.next ? current.next : current.prev;
            }
            else {
                const node = removed.pop();
                if(node.prev) node.prev.next = node;
                if(node.next) node.next.prev = node;
            }
        }
    })
    answer = Array(n).fill('O');
    //console.log(removed);
    removed.forEach(node => answer[node.value] = 'X');
    return answer.join('');
}