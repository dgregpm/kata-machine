class Node<T>{
    public value: T;
    public next?: Node<T>;
    constructor(item: T){
        this.value = item;
        this.next = undefined;
    }
}

export default class Stack<T> {
    public length: number;
    public head?: Node<T>;
    

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const node = new Node<T>(item);
        node.next = this.head;
        this.head = node;
        this.length++;
    }
    pop(): T | undefined {
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