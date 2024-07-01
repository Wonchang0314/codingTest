class pq {
  constructor() {
    this.heap = [null];
  }
  size() {
    return this.heap.length - 1;
  }
  insert(value) {
    this.heap.push(value);
    let current = this.heap.length - 1;
    let parent = Math.floor(current / 2);

    while (current > 1 && this.heap[current] < this.heap[parent]) {
      this.swap(current, parent);
      current = parent;
      parent = Math.floor(current / 2);
    }
  }
  swap(x, y) {
    [this.heap[x], this.heap[y]] = [this.heap[y], this.heap[x]];
  }
  delete() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();
    let pop = this.heap[1];
    let last = this.heap.pop();
    if (this.size() > 0) {
      this.heap[1] = last;
      this.heapify(1);
    }
    return pop;
  }
  heapify(i) {
    let left = 2 * i;
    let right = 2 * i + 1;
    let smallest = i;
    if (left <= this.size() && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }
    if (right <= this.size() && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }
    if (smallest !== i) {
      this.swap(i, smallest);
      this.heapify(smallest);
    }
  }
}
function solution(scoville, K) {
  let priorityQueue = new pq();
  scoville.forEach((item) => priorityQueue.insert(item));
  let count = 0;
  while (priorityQueue.size() > 1 && priorityQueue.heap[1] < K) {
    let a = priorityQueue.delete();
    let b = priorityQueue.delete();
    let c = a + b * 2;
    priorityQueue.insert(c);
    count += 1;
  }
  return priorityQueue.heap[1] >= K ? count : -1;
}