class Node<T>{
    public value: T;
    public next?: Node<T>;
    constructor(item: T){
        this.value = item;
    }
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const n = new Node<T>(item);
        n.next = this.head;
        this.head = n;
        this.length++;        
    }
    pop(): T | undefined {
        if(!this.head){return undefined;}
        const tmp = this.head;
        this.head = this.head?.next;
        tmp.next = undefined;
        this.length--;
        return tmp.value;
    }
    peek(): T | undefined {
        if(!this.head){return undefined}
        return this.head.value;
    }
}