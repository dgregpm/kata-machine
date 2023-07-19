class Node<T>{
    public value: T;
    public next: Node<T> | undefined;
    constructor(item: T){
        this.value = item;
        this.next = undefined;
    }
}

export default class Queue<T> {
    public length: number;
    public head?: Node<T>;
    public tail?: Node<T>;
    
    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(item: T): void {
        if(!this.head || !this.tail){
            this.head = this.tail = new Node<T>(item);
            this.length++;
            return;
        }
        const node = new Node<T>(item);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }
    deque(): T | undefined {
        if(!this.head){
            return undefined;
        }
        const node = this.head;
        this.head = this.head.next;
        this.length--;
        return node.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}